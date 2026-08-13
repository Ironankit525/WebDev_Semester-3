// const fs = require('fs');

// fs.writeFileSync("index.html", "Hello World");
// fs.appendFileSync("index.html", "appending");

// let data = fs.readFileSync("index.html");

// console.log(data.toString());

// fs.unlinkSync("index.html");

// fs.mkdirSync("f1")
// // fs.writeFileSync("f1/new.py","h1.txt")

// // fs.rmdirSync("f1")
// let os=require('os')
// console.log(os.totalmem()/1024/1024/1024)
// console.log(os.freemem()/1024/1024/1024)
// console.log(os.cpus())
// console.log(os.arch())
// console.log(os.uptime()/60/60/24)
// console.log(os.uptime())

// let http=require('http')

// let server=http.createServer((req,res)=>{
//     res.write("hello")

//     if(req.url=='/'){
//         res.end(" h1")
//     }
//     if(req.url=='/home'){
//         res.end("  h2")
//     }
//     // res.end("   hi broo ")
// })


let express=require('express')

let app=express()

app.use((req,res,next)=>{
    console.log("1 middleware allow ")
    next()
})

app.use((req,res,next)=>{
    console.log(' 2 middleware do not allow ')
    next()
    

})
app.get('/',(req,res)=>{
 res.send("hello server")
})

app.post('/',(req,res)=>{
 res.send("post server")
})

app.listen(3000,()=>{
    console.log("server is running ..")
})