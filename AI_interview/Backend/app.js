let express=require('express')
let app=express();

app.get('/',(req,res)=>{
    res.send("hello ankit ")
})

app.listen(5000,()=>{
    console.log("app server is running........ ")

})
