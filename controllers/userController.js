const db = require("../connection/connection");
const response = require("../response/response");

function getUser(req, res) {
  try {
    const { page, limit } = req.query;
    const offset = (page - 1) * limit;

    const sql = `SELECT COUNT(*) AS total FROM users`;
    db.query(sql, (err, result) => {
      if (err) {
        response(500, "Internal Server Error", null, res);
        return;
      }
      const total = result[0].total;
      const totalPages = Math.ceil(total / limit);

      const dataSql = `SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`;
      db.query(dataSql, (err, result) => {
        if (err) {
          response(500, "Internal Server Error", null, res);
          return;
        }
        response(
          200,
          "Berhasil Menampilkan Data",
          result,
          res,
          totalPages,
          total,
          page
        );
      });
    });
  } catch (e) {
    console.log(e.message());
  }
}

function getUserByID(req, res) {
  const sql = `SELECT name FROM users WHERE id = ${req.query.id}`;
  db.query(sql, (err, result) => {
    if (result.length === 0) {
      response(404, "User not found", null, res);
      return;
    }
    response(200, "Successfully fetched user", result, res);
  });
}

module.exports = { getUser, getUserByID };
