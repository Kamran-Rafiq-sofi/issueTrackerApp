const env=require('./environment');
const mongoose=require('mongoose')
// const url='mongodb://127.0.0.1/IssueTrackerApp';
// const url=`mongodb://127.0.0.1:27017/${env.db}`;
// const url=`mongodb://127.0.0.1/${env.db}`;
// const url=process.env.ERS_DB_URI;


// mongoose.connect(url);
console.log(env.db)
// mongoose.connect(`mongodb://127.0.0.1/${env.db}`);
mongoose.connect('mongodb+srv://kamranrafiq805:kamranrafiqsofi@cluster0406.8ritmss.mongodb.net/issuetracker')
const db=mongoose.connection;
db.on('error', console.error.bind(console,"error in connecting to db"))
db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")

});
module.exports=db;