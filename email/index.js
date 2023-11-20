const nodemailer = require('nodemailer');

// 创建 Nodemailer 传输器
const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    service: 'smtp.qq.com', 
    port: 25,
    auth: {
        user: '212681712@qq.com', // 发件人的邮箱地址
        pass: 'qkreicgbynjabhjc'// 发件人的邮箱密码
    }
});

// 定义发送邮件方法
const sendMail = (type,price) => {
    // 设置邮件选项
    const mailOptions = {
        from: '价格提醒<212681712@qq.com>', // 发件人邮箱地址
        to: '212681712@qq.com',// 收件人邮箱地址
        subject: "价格提醒", // 邮件主题
        text: `${type}价格到达${price}` // 邮件正文
    };

    // 使用 Nodemailer 发送邮件
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("邮件发送失败" + error);
        } else {
            console.log('邮件发送成功:', info.response);
        }
    });
}

module.exports ={
    sendMail
};