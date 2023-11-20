const express = require("express");
const web3 = require("./utils/web3.js");
const http = require("./utils/http.js");

const app = express()



const priceRouter = require("./route/price.js");
app.use("/price",priceRouter);


app.listen(3000, console.log("server is running at http://127.0.0.1:3000"));
