const express = require("express");
const web3 = require("./utils/web3.js");

const accout = web3.eth.accounts.create();

console.log(accout);

const app = express()

app.listen(3000, console.log("server is running at http://127.0.0.1:3000"));
