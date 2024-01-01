import Room from "../models/room";
import mongoose from "mongoose";
let isConnected: boolean = false;
import env from "dotenv";
env.config();

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if(!process.env.MONGODB_URI) {
        return console.log("DB URI not found");
    }

    if(isConnected) {
        return console.log("DB is already connected");
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log("DB connected");
    }
    catch(err) {
        console.log(err);
    }
}

export const leaveRoom = async (roomId:string, username:string) => {
    try{
        await connectToDB();

        if(!roomId || !username){
            return {message:"Invalid request",status:400};
        }

        const room = await Room.findOne({ id:roomId }).catch((err)=>{
            console.log(err);
        });

        if(!room){
            return {message:"Room not found",status:404};
        }

        room.members = room.members.filter((member:string)=>member!==username);

        if(room.members.length===0){
            await Room.deleteOne({id:roomId});
            return {message:"Room deleted",status:200};
        }

        await room.save();
    }
    catch(err){
        console.log(err);
    }
}