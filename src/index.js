// import mongoose from "mongoose";
// import express from "express";
// import  {DB_NAME} from "./constant.js"
// const app=express();
// require('dotenv').config({path: './env'})


import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})














 

// (async () =>{
//     try {
//         await 
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error",error);
           
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listing at ${process.env.PORT}`);
//         })
//     } catch (error) {
//          console.log("error is :",error);
//     }
// })
// ()

