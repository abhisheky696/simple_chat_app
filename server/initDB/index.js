import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import  express  from "express";
import Chat from "../Models/chat.js";
import chatsData from "./data.js";
const db_url = "mongodb://127.0.0.1:27017/Sandesh";
let atlas_url=process.env.ATLAS_URL;

async function main() {
    await mongoose.connect(atlas_url,{useNewUrlParser: true,
        useUnifiedTopology: true,});
}
main().then(() => {
    console.log("database connected successfully");
}).catch((error) => {
    console.log("some error occured in connecting database",error);
})

// const intialiseDatabse = async  () => {
//     console.log("databse initialization started");
//     const data=await Chat.insertMany(chatsData);
//     console.log("database initialized successfully");
// }
// intialiseDatabse();

export default main;
