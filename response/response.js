const response = (statusCode, message, data, res, totalPages, total, page) => {
  res.status(statusCode).json({
    statuscode: statusCode,
    message: message,
    datas: data,
    pagination: {
      page: page,
      total: total,
      totalPages: totalPages,
    },
  });
};

module.exports = response;
