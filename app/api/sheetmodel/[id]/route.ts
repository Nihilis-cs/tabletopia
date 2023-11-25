import { Database } from "@/lib/supabase";
import { z } from "zod";
import { FieldModel, FieldModelSchema, FieldsModelSchema, SheetModelDetails, SheetModuleModel } from "@/types/Sheet";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { serialize } from "v8";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })
    const { data: { session }, } = await supabase.auth.getSession();
    const user = session?.user;
    if (user) {
        const { data: sheet } = await supabase
            .from("SheetModels")
            .select(`
                id,  
                name,
                creator_id,
                created_at`)
            .eq('id', params.id).single();
        if (sheet != undefined) {
            var vRet: SheetModelDetails = {
                id: sheet.id,
                created_at: sheet.created_at,
                creator_id: sheet.creator_id,
                name: sheet.name,
                modules: []
            };
            const { data: modules, error } = await supabase
                .from("SheetModuleModels")
                .select(`
                    module_id:id,
                    title,
                    type,
                    sheet_model_id,
                    fields`)
                .eq('sheet_model_id', params.id);
            console.log(modules);
            if (modules != undefined) {
                modules.forEach(async (mod, index) => {
                    var vModule: SheetModuleModel = {
                        id: mod.module_id,
                        title: mod.title,
                        type: mod.type,
                        fields: [],
                    };
                    const vFields = FieldsModelSchema.parse(mod.fields);
                    vModule.fields = vFields;

                    vRet.modules.push(vModule);
                })
                return Response.json(vRet);
            }
            return Response.json(vRet);
        }
    }
    return Response.json('User not authenticated');
}

