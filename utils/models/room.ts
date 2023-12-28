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
    members: [{
        type: String,
    }],
});

const Room = mongoose.models.Room || mongoose.model("Room", roomSchema);

export default Room;