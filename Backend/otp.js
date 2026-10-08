let router=express.Router()

app.post("/send-otp", (req, res) => {
    let { phoneN } = req.body;

    let otp = Math.floor(100000 + Math.random() * 900000);

    console.log(otp);

    let otpE = new Date(Date.now() + 1 * 60 * 1000);

    console.log(otpE);

    res.send("OTP generated");
});