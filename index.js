
const express = require("express")
const bodyParser = require("body-parser")
const { getUser, getUserByID } = require("./controllers/userController");

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get("/", getUser)
app.get("/find", getUserByID);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})