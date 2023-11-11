import { Database } from "@/lib/supabase";
import { FieldModel, SheetModelDetails, SheetModelEntry, SheetModuleModel } from "@/types/Sheet";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { serialize } from "v8";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    console.log(params.id);
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })
    const { data: { session }, } = await supabase.auth.getSession();
    const user = session?.user;
    if (user) {
        // const { data, error, status, statusText } = await supabase
        //     .from('SheetModuleModels')
        //     .select(`
        //         module_id:id,
        //         title,
        //         type,
        //         sheet_model_id,
        //         SheetModels!inner( 
        //             id,  
        //             name,  
        //             creator_id,  
        //             created_at)`)
        //     .eq('SheetModels.id', params.id);
        // console.log(error);
        // console.log(data);

        // if (data) {
        //     if (data.length > 0) {
        //         var vSheet = data!.at(0)!.SheetModels!;
        //         var vRet: SheetModelDetails = {
        //             id: vSheet.id,
        //             created_at: vSheet.created_at,
        //             creator_id: vSheet.creator_id,
        //             name: vSheet.name,
        //             modules: []
        //         };
        //         data.forEach((module) => {
        //             vRet.modules.push({
        //                 id: module.module_id,
        //                 type: module.type,
        //                 title: module.title,
        //                 fields: []
        //             })
        //         })
        //         return Response.json(vRet);
        //     }
        // }
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
            console.log(error);
            if (modules != undefined) {
                modules.forEach(async (mod, index) => {
                    var vModule: SheetModuleModel = {
                        id: mod.module_id,
                        title: mod.title,
                        type: mod.type,
                        fields: [],
                    };
                    mod.fields?.forEach((field) => {
                        var vField: FieldModel = { name: 'Field' };
                        // vField.name = field?.valueOf() as string;
                        vModule.fields.push(vField)

                    }) 
                    vRet.modules.push(vModule);
                })
                return Response.json(vRet);
            }
            return Response.json(vRet);
        }
    }
    return Response.json('Error')
}