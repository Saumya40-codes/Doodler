import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    owner: {
        type:String,
    },
    access :{
        type: String,
        required: true,
    },
    members: [{
        required: false,
        type: String,
    }],
});

const Room = mongoose.models.Room || mongoose.model("Room", roomSchema);

export default Room;