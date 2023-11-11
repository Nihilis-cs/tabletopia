import { Json } from "@/lib/supabase";

export interface SheetModelEntry {
    id: string;
    name: string;
    created_at: string;
}

export interface CreateSheetModel {
    title: string;
}

export interface SheetModelQuery{
    id: string
    created_at: string
    creator_id: string
    name: string
}

export interface SheetModelDetails{
    id: string;
    created_at: string;
    creator_id: string | null;
    name: string;
    modules: SheetModuleModel[];
}

export interface SheetModuleModel{
    id: string;
    title: string | null;
    type: string;
    fields: FieldModel[];
}
export interface FieldModel{
    name: string;
    max_value?: number;
    min_value?: number;
}

