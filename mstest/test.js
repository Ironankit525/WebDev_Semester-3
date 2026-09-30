// let fs=require('fs');

// fs.mkdir('fold2',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("fold2 created ")

//     fs.writeFile('fold2/data.txt','hi i am fold2',(err)=>{
//         if(err){
//         console.log(err);
//     }
//     console.log('file crated'); 

//    fs.readFile('fold2/data.txt',(err,data)=>{
//          if(err){
//         console.log(err);
//     }
//     console.log("data of file is :")
//     console.log(data.toString())

//     })

//     })

    
// })
// uasdhfkj
let express=require('express')

let app=express();
let mongooes=require('mongoose')
let User = require("./db.js");
let bcryptjs = require("bcryptjs");
let jwt = require("jsonwebtoken");
let crypto = require("crypto");
 mongooes
  .connect(
    "mongodb+srv://aka_ankit:ankit5706@cluster0.vqn6mtv.mongodb.net/vedam",
  )
  .then(() => {
    console.log("db connected ........");
  });

  


app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/product:id',(req,res)=>{
   let id=req.params;
   console.log(id);
   res.send(id);
})

app.get('/search',(req,res)=>{
    
    console.log(req.query);
    res.send("ok")
})

app.use(express.json());
app.post('/about',(req,res)=>{
    console.log(req.body)
})

let products = [
{ id: 1, name: "iPhone 15", category: "mobile", price: 69999, stock: 10 },
{ id: 2, name: "Galaxy S24", category: "mobile", price: 64999, stock: 8 },
{ id: 3, name: "MacBook Air", category: "laptop", price: 99999, stock: 5 },
{ id: 4, name: "Dell XPS 14", category: "laptop", price: 89999, stock: 7 },
{ id: 5, name: "AirPods Pro", category: "headphones", price: 24999, stock: 15 },
{ id: 6, name: "Sony XM5", category: "headphones", price: 29999, stock: 12 }
]

app.get('/items',(req,res)=>{
    res.json({data:products});
})


app.get('/items/:category',(req,res)=>{
   let {category}= req.params
   let data = products.filter((a) => a.category === category);
   

   if(data.length === 0){
    return res.send('item not found ')

   }
   res.json({data:data})

})


app.post('/items',(req,res)=>{
    let obj={...req.body};
    products.push(obj);
    res.send(obj);
})


app.put('/items/:id',(req,res)=>{
    let {id}=req.params;
    let {stock}=req.body;

    let data=products.find((a)=>a.id===Number(id));
    if(!data){
        return console.log("item not found ")
    }

    data.stock=stock;
    res.json({
        massage:'updata stock',
        data
    })

   
})


app.delete('/items/:id',(req,res)=>{
    let {id}=req.params;
    

    let index=products.findIndex((a)=>a.id===Number(id));
    if(!index){
        return console.log("item not found ")
    }

    let deleted=products.splice(index,1)
  
    res.json({
        massage:'item deleted ',
        deleted
    })

   
})


app.post('/SignUp',async(req, res)=>{
    let {name,email,passWord,role}=req.body;

    let emailCheck=await User.findOne({email});

    if(emailCheck){
       return res.status(409).send("user already exists");
    }
     
    let hasedpass=await bcryptjs.hash(passWord,10);

    let userInfo=new User({
        name:name,
        email:email,
        passWord:hasedpass,
        role:role|| "user"
    })

    await userInfo.save();

    res.send("account created successfully");
})


app.post('/login',async(req,res)=>{
   let{name,email,password}=req.body;
   let data = await User.findOne({email});
   if(!data){
    return 
   }
   let hashp=await bcryptjs.compare(password,data.password);
   if(!hashp){

   }
   let token = jwt.sign({name:data.name,email:data.email},"secreatkey");
   res.status(200).json({token:token})

});

let auth=(req,res,next)=>{
    let token=req.headers.authorization;
    
    if(!token){
        return res.send("token is not given ")
    }

    try{
    let decoded=jwt.verify(token,"mySecretKey")
    req.user=decoded;

    next();}catch(err){
        res.send(err);
    }
}


//


let roleCheck=(role)=>{
    return(req,res,next)=>{
        if(req.user.role!=role){
            return res.send("are you trying to invade ");
        }

        next();
    }
}


app.post('/profile',auth,roleCheck("admin"),(req,res)=>{
    res.send("hello boss wellcome ")
})

let resetToken = crypto.randomBytes(20).toString("hex");

let { sendEmail } = require("./sendEmail.js");



app.post('/forgot-password', async(req,res)=>{
    let {email}=req.body;

    try{
        let user=await User.findOne({email});
        if(!user){
            return res.send("you are no a user ");
            
        }
        let resetToken=crypto.randomBytes(20).toString("hex");
        user.resetToken=resetToken;
        user.resetTokenExpiry=Date.now()+3600000;
        await user.save();
        let resetUrl =`http://localhost:6000/reset/${resetToken}`
        await sendEmail(user.email, "Password Reset Request",
                `Click the link below to reset your password:\n\n${resetUrl}`);


       res.send("Password reset email sent")         





    }catch(err){
        res.send(err)
    }
})


app.post("/reset-password/:token", async (req, res) => {
 let { newP } = req.body;
 let { token } = req.params;

 let user = await User.findOne({
 resetToken: token,
 resetTokenExpiry: { $gt: Date.now() } // not expired
 });

if (!user) {
 return res.status(400).send("Invalid or expired link");
 }

user.passWord = await bcryptjs.hash(newP, 10);
user.resetToken = undefined; user.resetTokenExpiry = undefined;
await user.save();
res.send("Password reset successful");
// link cannot be used again
});






app.listen(3000,()=>{
    console.log('server is started..........')
})
