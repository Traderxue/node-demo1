const express = require("express");
const web3 = require("./utils/web3.js");
const http = require("./utils/http.js");
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const priceRouter = require("./route/price.js");
app.use("/price",priceRouter);

const typeRouter = require("./route/type.js");
app.use("/type",typeRouter);

app.listen(3000, console.log("server is running at http://127.0.0.1:3000"));
