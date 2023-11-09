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
