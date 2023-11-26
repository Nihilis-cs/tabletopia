import { Database } from "@/lib/supabase"
import { CreateSheetModel } from "@/types/Sheet"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"


export async function POST(request: Request) {
    const req: CreateSheetModel = await request.json();
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })
    const { data: { session }, } = await supabase.auth.getSession();
    const { data } = await supabase
        .from('SheetModels')
        .insert([
            { name: req.title, creator_id: session?.user.id },
        ]).select();

    return NextResponse.json(data);
}