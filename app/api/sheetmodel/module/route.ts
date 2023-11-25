import { Database } from "@/lib/supabase";
import { CreateSheetModuleModel, SheetModelDetails } from "@/types/Sheet";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    console.log(request);
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })
    const { data: { session }, } = await supabase.auth.getSession();
    const user = session?.user;
    if (user) {

    }
    return Response.json('User not authenticated');

}