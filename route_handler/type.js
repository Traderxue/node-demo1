const db = require("../utils/mysql.js")

//添加，删除，查询

//查询所有
exports.getList = (req, res) => {
    const sql = "select * from type";
    db.query(sql, (err, result) => {
        if (err || result.length == 0) {
            return res.json({
                code: 400,
                msg: "没有获取到数据"
            })
        }
        return res.json({
            code: 200,
            msg: "获取数据成功",
            data: result
        })
    })
}


//添加
exports.add = (req, res) => {
    const data = req.body

    const sqlStr = `select * from type where type = ${req.body.type}`;

    db.query(sqlStr,(err,result)=>{
        if(err || result.length>0){
            return res.json({
                code:400,
                msg:"种类已存在"
            })
           }
    })


    const sql = "insert into type (type,price,email) values (?,?,?)"

    db.query(sql, [data.type, data.price, data.email], (err, result) => {
        if (err) {
            return res.json({
                code: 400,
                msg: "新增种类失败"
            })
        }
        return res.json({
            code: 200,
            msg: "新增种类成功"
        })
    })
}


//更新
exports.update = (req, res) => {
    const data = req.body
    const sql = "update type set price = ? where id = ?";

    db.query(sql,[data.price,data.id],(err,result)=>{
        if(err){
            return res.json({
                code:400,
                msg:"更新价格失败"
            })
        }
        return res.json({
            code:200,
            msg:"更新价格成功"
        })
    })
}


//删除
exports.delete = (req,res)=>{
    const id = req.params.id
    const sql = `delete from type where id = ${id}`

    db.query(sql,(err,result)=>{
        if(err){
            return res.json({
                code:400,
                msg:"删除失败"
            })
        }
        return res.json({
            code:200,
            msg:"删除成功"
        })
    })
}



