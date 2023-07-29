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
module.exports=development;