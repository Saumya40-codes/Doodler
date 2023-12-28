import { connectToDB } from "@/utils/mongoose";
import Room from "@/utils/models/room";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        await connectToDB();

        const { id, owner } = await request.json();

        if (!id || !owner) {
            return NextResponse.json({ message: "Invalid request" });
        }
        // console.log(id, owner, members);

        const room = new Room({ id, owner });
        await room.save();
        return NextResponse.json({ message: "Room created" });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" });
    }
}

export async function GET(request: Request) {
    try{
        await connectToDB();

        const { id } = await request.json();

        if(!id) {
            return NextResponse.json({ message: "Invalid request" });
        }

        const room = await Room.findOne({ id });

        if(!room) {
            return NextResponse.json({ message: "Room not found", status: 404 });
        }

        return NextResponse.json({ room, status: 200 });
    }
    catch(err) {
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" });
    }
}
