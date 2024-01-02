import { connectToDB } from "@/utils/mongoose";
import Room from "@/utils/models/room";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        await connectToDB();

        const { id, owner,access, members } = await request.json();

        if (!id || !owner || !access || !members) {
            return NextResponse.json({ message: "Invalid request" });
        }
        // console.log(id, owner, members);

        // console.log(id, owner, access, members);

        const room = new Room({ id, owner,access, members});
        await room.save();

        // console.log(room);
        return NextResponse.json({ message: "Room created" });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" });
    }
}
