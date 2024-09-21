import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from 'next/server';
export async function POST(request: NextRequest ) {
    const body = await request.json(); 
    const origin = headers().get("origin");
    console.log(body); 
    console.log(origin); 
    return NextResponse.json({ message: "WOOH" }, { status: 200 });
}

