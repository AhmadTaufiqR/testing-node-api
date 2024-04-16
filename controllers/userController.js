const db = require("../connection/connection");
const response = require("../response/response");

function getUser(req, res) {
    const sql = `SELECT * FROM users`;
    db.query(sql, (err, result) => {
        if (err) {
            response(500, "Internal Server Error", null, res);
            return;
        }
        
        response(200, "Berhasil Menampilkan Data", result, res);
    });
}

function getUserByID(req, res) {
    const sql = `SELECT name FROM users WHERE id = ${req.query.id}`
    db.query(sql, (err, result) => {
        if (result.length === 0) {
            response(404, "User not found", null, res);
            return;
        }
        response(200, "Successfully fetched user", result, res);
    });
}

module.exports = {getUser, getUserByID}
