require('dotenv').config();  //Load Env

const express =require('express');
const db=require('./config/mongoose');
const port=8000;
const app=express();
const path=require('path');
const expressLayouts=require('express-ejs-layouts');



//passport and session requirements
// const passport = require('passport');
// const localStrategy = require('./configs/passport_local_strategy');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(express.urlencoded({extended:true}))
app.use(express.static('assets'))
app.use(expressLayouts)
app.use(cookieParser());


// // session setup
app.use(session({
    name: 'ERS',
    secret: "issue",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1/IssueTrackerApp',
        collectionName: 'session',
        autoRemove: 'native'
    })
}));

// // passport middlewares
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(passport.setAuthenticatedUser);

// Extract Styles And Scripts from sub pages
app.set('layout  extractStyles',true)
app.set('layout extractScripts',true)

// Setup ViewEngine
app.set('view engine', 'ejs')
app.set('views','./views')
// path.join(__dirname);
// app.set('views', path.join(__dirname, 'views'));



// use express Router
app.use('/',require('./routes'))
app.listen(port,function(err){
    if (err){
    console.log(`error in running the server at port:${err}`)
}
console.log(`server is running at port: ${port}`)
})
