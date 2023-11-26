import { Database } from "@/lib/supabase";
import { CreateSheetModuleModel } from "@/types/Sheet";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const req: CreateSheetModuleModel = await request.json();
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })
    const { data: { session }, } = await supabase.auth.getSession();
    const user = session?.user;
    if (user) {
        const { data } = await supabase
            .from("SheetModuleModels")
            .insert([
                {
                    sheet_model_id: req.sheetId,
                    title: req.title,
                    type: req.type,
                    fields: req.fields ? req.fields : [],
                }
            ]);
        return NextResponse.json(data);

    }
    return Response.json('User not authenticated');

}