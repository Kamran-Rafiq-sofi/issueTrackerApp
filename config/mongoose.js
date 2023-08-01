const env=require('./environment');
const mongoose=require('mongoose')



// mongoose.connect(url);
console.log(env.db)
// mongoose.connect(`mongodb://127.0.0.1/${env.db}`);

mongoose.connect(`mongodb+srv://kamranrafiq805:kamranrafiqsofi@cluster0406.8ritmss.mongodb.net/${env.db}`)
const db=mongoose.connection;
db.on('error', console.error.bind(console,"error in connecting to db"))
db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")

});
module.exports=db;
