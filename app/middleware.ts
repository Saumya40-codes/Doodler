import { NextResponse } from "next/server";

export function middleware(req:Request){
    try{
        const user = localStorage.getItem('user');

        if(!user){
            return NextResponse.redirect('/Room')
        }

        return NextResponse.next()
    }
    catch(err){
        return NextResponse.redirect('/Room')
    }
}