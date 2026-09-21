const express = require("express");
const router = express.Router();

router.post('/login', async(req,res)=>{
   let {email,passWord}=req.body
 let findData=   await User.findOne({email})    
 console.log(findData,"heheh");

 let validP= await   bcryptjs.compare(passWord,findData.passWord)
 if(!validP){
   return res.send("kuch nhi ho payega aapse.....")
 }

  let token=    jwt.sign({id:findData._id, email:findData.email,role:findData.role},"hehehehehe")
  console.log(token,"hehe");

  
 res.json({msg:"done",token:token})

})

module.exports = router;
