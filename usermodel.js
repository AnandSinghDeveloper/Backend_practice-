const mongoose = require('mongoose');

 mongoose.connect('mongodb://127.0.0.1:27017/mongopractice');


 const userSchema= mongoose.Schema({
      User:String,
      UserName:String,
      Email:String

 })

 module.exports = mongoose.model("User", userSchema)
