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


// let express=require('express')

// let app=express()

// app.use((req,res,next)=>{
//     console.log("1 middleware allow ")
//     next()
// })

// app.use((req,res,next)=>{
//     console.log(' 2 middleware do not allow ')
//     next()
    

// })
// app.get('/',(req,res)=>{
//  res.send("hello server")
// })

// app.post('/',(req,res)=>{
//  res.send("post server")
// })

// app.listen(3000,()=>{
//     console.log("server is running ..")
// })



// let express=require('express')

// let app=express()
// app.use(express.json())


// app.get('/',(req,res)=>{
//     res.send("hello")
// })

// app.get('/new',(req,res)=>{
//     res.send("new")
// })
// app.get('/new/:id',(req,res)=>{
//     let {id}=req.params

//     res.send(id)
// })


// app.get('/search',(req,res)=>{
//     console.log(req.query)

//     res.send("search")
// })

// app.post('/body',(req,res)=>{
//     console.log(req.body)

//     res.send("search")
// })


// app.listen(3000,(req,res)=>{
//     console.log("server...... is running")
// })



let express= require('express')

let app=express()
app.use(express.json())

const products = [
  {
    id: 1,
    brand: "Samsung",
    name: "Galaxy S26 Ultra",
    price: 144999,
    category: "Smartphone",
    inStock: true
  },
  {
    id: 2,
    brand: "Apple",
    name: "iPhone 17 Pro Max",
    price: 163490,
    category: "Smartphone",
    inStock: false
  },
  {
    id: 3,
    brand: "vivo",
    name: "X300 Ultra",
    price: 139999,
    category: "Smartphone",
    inStock: true
  },
  {
    id: 4,
    brand: "OnePlus",
    name: "15",
    price: 85999,
    category: "Smartphone",
    inStock: true
  },
  {
    id: 5,
    brand: "Motorola",
    name: "Edge 70 Fusion",
    price: 34340,
    category: "Smartphone",
    inStock: true
  }
];

app.get('/',(req,res)=>{
        res.json(products)
// })dljf

app.get("/products/:id",(req,res)=>{
    let{id}=req.params
    let data=products.find((a)=>{
       return a.id===Number(id)
    })
    console.log(id)
})

app.get('/search',(req,res)=>{
   let {category}=req.query
   
    
      let data=   products.filter((a)=>{
            return a.category==category
         })
         
         if(!data){
            return res.status(404).json({msg:"no data"})

         }
         res.status(200).json({msg:data})
         
   

})


app.put('/add',(req,res)=>{

})



app.listen(3000,()=>{
    console.log("server.... is running")
})