import { StatusCodes } from "@/constants";
import { SignUp, SingUpResponse } from "@/types/users";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from 'next/server';
export async function POST(request: NextRequest) {
    const body: SignUp = await request.json();
    const origin = headers().get("origin");
    const supabase = createClient();

    const { error, data } = await supabase.auth.signUp({
        email: body.email,
        password: body.password,
        options: {
            emailRedirectTo: `${origin}/auth/callback`,
        },
    });

    console.log(error, data)

    const response: SingUpResponse = {
        email: body.email,
        username: "Zain",
        university: body.university,
        message: "User Created",
        code: StatusCodes.created
    }

    return NextResponse.json(response, { status: StatusCodes.created });
}

