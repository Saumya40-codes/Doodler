import { connectToDB } from "@/utils/mongoose";
import Room from "@/utils/models/room";
import { NextResponse } from "next/server";

export async function POST(request:Request, res: Response) {
    await connectToDB();
    const { roomId } = await request.json();

    if(!roomId){
        return NextResponse.json({ message: "Invalid request" });
    }

    const room = await Room.findOne({ id: roomId });

    if (!room) {
        return NextResponse.json({ message: "Room not found", status: 404 });
    }

    const mem_list = room.members;
    return NextResponse.json({ mem_list });
}