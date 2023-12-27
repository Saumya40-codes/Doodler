import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/utils/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try{
        if(req.method === "POST"){
            await POST(req, res);
        }
    }
    catch(err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
        return;
    }
}

async function POST(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ message: "Hello world" });
}

export default handler;
