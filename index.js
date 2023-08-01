// require('dotenv').config();  //Load Env

const express =require('express');
const db=require('./config/mongoose');
const port=8000;
// const port=process.env.ERS_PORT || 8000;
const app=express();
const path=require('path');
const expressLayouts=require('express-ejs-layouts');
const env=require('./config/environment');



//passport and session requirements
// const passport = require('passport');
// const localStrategy = require('./configs/passport_local_strategy');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(express.urlencoded({extended:true}))
// app.use(express.static('./assets'))
app.use(express.static(env.asset_path))
// app.use(express.static(process.env.ERS_ASSET_PATH))
// app.use(express.static(process.env.ISSUE_ASSET_PATH))



app.use(cookieParser());


// // session setup
app.use(session({
    name: 'issuetracking',
    // secret: "issue",
    secret:env.session_cookie_key,
    // secret:process.env.ERS_SESSION_COOKIE_KEY,
    // secret:process.env.SESSION_COOKIE_KEY,

    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
    },
    store: MongoStore.create({
        // mongoUrl: 'mongodb://127.0.0.1/IssueTrackerApp',
        
mongoUrl:`mongodb+srv://kamranrafiq805:kamranrafiqsofi@cluster0406.8ritmss.mongodb.net/${env.db}`
   

        collectionName: 'session',
        autoRemove: 'native'
    })
}));

// // passport middlewares
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(passport.setAuthenticatedUser);
app.use(expressLayouts)

// Extract Styles And Scripts from sub pages
app.set('layout extractStyles',  true)
app.set('layout extractScripts', true)

// Setup ViewEngine
app.set('view engine', 'ejs')
// app.set('views','./views')
// path.join(__dirname);
app.set('views', path.join(__dirname, 'views'));



// use express Router
app.use('/',require('./routes'))
app.listen(port,function(err){
    if (err){
    console.log(`error in running the server at port:${err}`)
}
console.log(`server is running at port: ${port}`)
})

