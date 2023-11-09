import { Database } from "@/lib/supabase";
import { SheetModelEntry } from "@/types/Sheet";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })
    const { data: { session }, } = await supabase.auth.getSession();
    const user = session?.user;
    if (user) {
        const { data } = await supabase
            .from('SheetModels')
            .select('id, name, created_at', )
            .eq('creator_id', user!.id);
        
        var vRet: SheetModelEntry[] = [];
        data?.forEach((sheet) => { 
            vRet.push({
                id: sheet.id, 
                name: sheet.name, 
                created_at: sheet.created_at,
            })
        })
        console.log(vRet);
        return Response.json(vRet);
    }

    return Response.json('Error')



}