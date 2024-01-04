import { connectToDB } from "@/utils/mongoose";
import Room from "@/utils/models/room";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try{
        await connectToDB();

        const { id, user } = await request.json();

        if(!id) {
            return NextResponse.json({ message: "Invalid request" });
        }

        const room = await Room.findOne({ id });

        if(!room) {
            return NextResponse.json({ message: "Room not found", status: 404 });
        }

        room.members.push(user);

        await room.save();
        return NextResponse.json({ room, status: 200 });
    }
    catch(err) {
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" });
    }
}


export async function GET(request: Request) {
    try {
        await connectToDB();
        let count = await Room.find({});

        count = count.filter((room) => room.access === "public");

        const len = count.length;

        if(len == 0){
            return NextResponse.json({ message: "No public rooms found", status: 404 });
        }

        let idx = Math.floor(((Math.random() * len)%len));

        const room = await count[idx];

        const id = room.id;

        return NextResponse.json({ id, status: 200 });
    } catch(err) {
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" });
    }
}