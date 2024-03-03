import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
 mongoose.connect(process.env.DBURL);
 const DB = mongoose.connection;

 DB.on('error',(err)=>console.log(`There is Error IN DB ${err}`));
 DB.on('open',()=>console.log("DataBase Connected"));

 export default DB;