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
    type: EFieldType;
    fields?: FieldModel[] | null;
    order?: number;
}
export interface SheetModuleModelForm{
    title: string;
    type: EFieldType;
    fields?: FieldModel[];
    order?: number;
}
export interface CreateSheetModuleModel{
    sheetId: string;
    title: string;
    type: EFieldType;//"String" | "Stats" | "Inventory";
    fields?: FieldModel[];
    order?: number;
}

export enum EFieldType {
    STRING = 'String',
    STATS = 'Stats',
    INVENTORY = 'Inventory'
 }

export const FieldModelSchema = z.object({
    name: z.string(),
    max_value: z.optional(z.number()),
    min_value: z.optional(z.number()),
}).nullable();

export type FieldModel = z.infer<typeof FieldModelSchema>;
export const FieldsModelSchema = z.array(FieldModelSchema);
export type FieldsModel = z.infer<typeof FieldsModelSchema>;

export const StringFieldModelSchema = z.object({
    name: z.string(),
    value: z.string(),
}).nullable();

export type StringFieldModel = z.infer<typeof StringFieldModelSchema>;
export const StringFieldsModelSchema = z.array(StringFieldModelSchema);
export type StringFieldsModel = z.infer<typeof StringFieldsModelSchema>;
