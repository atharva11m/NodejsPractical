require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

require("./Models/db");

const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
