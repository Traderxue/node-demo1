const axios = require("axios")
const crypto = require("crypto")
const tunnel = require("tunnel")


// 您的API密钥信息
const api_key = "f5890ab2-a9c8-45bf-a91d-6010be64efbe";
const secret_key = "ADC1875DA3B14F1BF650EF29BF652E43";
const passphrase = "XQBxqb123@";

const method = "GET";
const request_psth = "/api/v5/public/price-limit?instId=BTC-USDT-SWAP";

const body = {}

const timestamp = new Date().toISOString()

//构建签名的字符串
const message = timestamp + method + request_psth +JSON.stringify(body);

//使用sh256进行签名
const signature = crypto.createHmac('sha256',secret_key).update(message).digest('base64');

const headers = {
    "OK-ACCESS-KEY": api_key,
    "OK-ACCESS-SIGN": signature,
    "OK-ACCESS-TIMESTAMP": timestamp,
    "OK-ACCESS-PASSPHRASE": passphrase,
    "Content-Type": "application/json"
}

const agent = tunnel.httpsOverHttp({
    proxy:{
        host:"127.0.0.1",
        port:23457
    }
})

const http = axios.create({
    baseURL:"https://www.okx.com/",
    timeout:5000,
    proxy:false,         //关闭自动检查代理
    httpsAgent:agent,
    headers
})


module.exports = http