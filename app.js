const Express =require('express');
const app = Express();

const userModel=require('./usermodel')

app.get('/',function(req,res){
  res.send('Hello Gentalman')
})

// lets create mongoose model 
app.get('/create', async function(req,res){

let createduser= await userModel({
    User:"Anand",
    UserName:"Aanand thakur",
    Email:"anandthakur@gmail.com" 

  })



  res.send(createduser)
  
})

app.get('/update', async function(req,res) {
    let updaeduser= await userModel.findOneAndUpdate({User:"Anand"},{User:"Aanand singh"},{new:true});
    // res.send("dhddh")
    console.log(updaeduser);
    res.send(updaeduser)
    
    
}) 
app.listen(3010);


