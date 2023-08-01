const fs= require('fs');
// const rfs=require('rotating-file-stream');
const path=require('path');
// const logDirectory=path.join(__dirname, '../production_logs');
// making directory and adding to it
// fs.existsSync(logDirectory)||fs.mkdirSync(logDirectory);
// user createstream to create one
// const accessLogStream= rfs.createStream('access.log',{
//     interval:'1d',
//     path:logDirectory
// });
const development={
    name:'development',
    asset_path:'./assets',
    db:'IssueTrackerApp',
    session_cookie_key:'issue'

}
// module.exports=development;

const production={
    // name:'production',
    name:process.env.ISSUE_ENVIRONMENT,
    asset_path:process.env.ISSUE_ASSET_PATH,
     session_cookie_key:process.env.SESSION_COOKIE_KEY ,
    db:process.env.ISSUE_DATABASE,
   

    
}
module.exports=eval(process.env.ISSUE_ENVIRONMENT)==undefined? development:eval(process.env.ISSUE_ENVIRONMENT);

// module.exports=eval(process.NODE_ENV)==undefined? development:production;