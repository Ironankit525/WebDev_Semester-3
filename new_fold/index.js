let express = require('express')
let cors = require('cors')
let app=express()

app.use(express.json())
app.use(cors())
let mongooes=require('mongoose')
mongooes.connect("mongodb+srv://aka_ankit:ankit5706@cluster0.vqn6mtv.mongodb.net/vedam").then(()=>{
  console.log("db connected ........")
})

const signup = require("./routes/signup");
const signin = require("./routes/signin");
app.use("/api", signup);
app.use("/api", signin);

app.listen(5000, () => {
  console.log("server started");
});
