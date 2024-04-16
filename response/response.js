const response = (statusCode, message, data, res) => {
    res.status(statusCode).json({
        payload: {
            statuscode: statusCode,
            message: message,
            datas: data,
        },
        pagination: {
            prev: "",
            next: "",
            max: "",
        },
    })
}

module.exports = response