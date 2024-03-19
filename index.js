import express from 'express';
import dotenv from 'dotenv';
import DB from './config/DB.js';
import router from './router/APIgateWay.js';
import cors from 'cors';
import session from 'express-session';
import passportLocal from './config/Auth/passport-Local.js';
import passportGoogle from './security/google-auth2.js';
import MongoStore from 'connect-mongo';
import passport from 'passport';

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());

app.use(session({
    name: 'Backend',
    secret: 'socialMedia',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongoUrl: process.env.DBURL,
            autoRemove: 'disabled'
        },
        function (err) {
            console.log(err || 'connect-mongo db setup ok');
        }
    )
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/',router)
// API Gatway (Entry Point for all)

app.listen(PORT,(err)=>{
    if(err){
        return console.log("There  is Error ",err);
    }
    console.log(`Server Up and Running at  PORT ${PORT} successfully`);
});
