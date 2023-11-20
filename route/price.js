const express = require("express");
const router = express.Router();
const priceHandler = require("../route_handler/price.js")

router.get("/:type",priceHandler.getPirce);

module.exports=router
