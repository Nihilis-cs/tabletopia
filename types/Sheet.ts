import { z } from "zod";
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
    fields?: FieldModel[] | null;
    order?: number;
}

export const FieldModelSchema = z.object({
    name: z.string(),
    max_value: z.optional(z.number()),
    min_value: z.optional(z.number()),
}).nullable();

export type FieldModel = z.infer<typeof FieldModelSchema>;
export const FieldsModelSchema = z.array(FieldModelSchema);
export type FieldsModel = z.infer<typeof FieldsModelSchema>;
