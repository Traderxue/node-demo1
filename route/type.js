const express = require("express");
const router = express.Router();
const typeRouter = require("../route_handler/type.js")


router.get("/list",typeRouter.getList);

router.post("/add",typeRouter.add);

router.post("/update",typeRouter.update);

router.delete("/delete/:id",typeRouter.delete);


module.exports=router
