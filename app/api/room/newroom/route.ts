import { connectToDB } from "@/utils/mongoose";
import Room from "@/utils/models/room";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        await connectToDB();

        const { id, owner, members } = await request.json();

        if (!id || !members || !owner) {
            return NextResponse.json({ message: "Invalid request" });
        }
        // console.log(id, owner, members);

        const room = new Room({ id, owner, members });
        await room.save();
        return NextResponse.json({ message: "Room created" });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" });
    }
}
