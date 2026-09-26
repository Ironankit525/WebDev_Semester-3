let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
 service: "gmail",
 auth: { user:"eshantharjun9@gamil.com", pass:"znue ucqo tvlx xpth" }
 });

 let sendEmail = async (to, subject, text) => {
await transporter.sendMail({ from: "eshantharjun9@gamil.com", to, subject, text });
 };

 module.exports = { sendEmail };