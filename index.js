const express = require("express");
const bodyParser = require("body-parser");
const { getUser, getUserByID } = require("./controllers/userController");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get("/", getUser);
app.get("/find", getUserByID);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
