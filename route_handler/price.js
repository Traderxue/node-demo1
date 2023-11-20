const http = require("../utils/http.js")
const mail = require("../email/index.js")
//https://www.okx.com/api/v5/public/mark-price?instType=SWAP&instId=ETH-USDT-SWAP

exports.getPirce = async (req, res) => {
    const type = req.params.type;

    const { data } = await http.get(`/api/v5/public/mark-price?instType=SWAP&instId=${type}-USDT-SWAP`)

    const price = data.data[0].markPx

    if (parseFloat(price) > 15) {
        mail.sendMail(type,price);
    }
    setTimeout(()=>{

    },1000*30)

    return res.json({
        code: 200,
        msg: "请求成功",
        data: price
    })
}


// 获取价格接口
// 添加种类接口

// 没10s请求一次
// nodejs