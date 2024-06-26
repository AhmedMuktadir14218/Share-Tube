// import mongoose from "mongoose";
// import express from "express";
// import { DB_NAME } from "./constance.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
}) 
const port = process.env.PORT || 8000;
connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server is running at ${port}`)

    })
   
})

.catch((error)=>{
    console.log("mongo db connection Failed",error)
})
// const app = express();
 
//  ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("errr:",error)
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.PORT}` )
//         })
//     }
   
//     catch (error){
//         console.log("Error",error)
//         throw err
//     }
// })()