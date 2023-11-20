const http = require("../utils/http.js")

//https://www.okx.com/api/v5/public/mark-price?instType=SWAP&instId=ETH-USDT-SWAP

exports.getPirce = async (req, res) => {
    const type = req.params.type;

    const {data}  = await http.get(`/api/v5/public/mark-price?instType=SWAP&instId=${type}-USDT-SWAP`)

    const price = data.data[0].markPx

    return res.json({
        code: 200,
        msg: "请求成功",
        data: price
    })
}