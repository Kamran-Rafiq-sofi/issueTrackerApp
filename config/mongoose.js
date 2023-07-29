const mongoose=require('mongoose')
const url='mongodb://127.0.0.1/IssueTrackerApp';
mongoose.connect(url);
const db=mongoose.connection;
db.on('error', console.error.bind(console,"error in connecting to db"))
db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")

});
module.exports=db;