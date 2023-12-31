import mongoose from "mongoose";

let isConnected: boolean = false;

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