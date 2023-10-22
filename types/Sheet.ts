export interface SheetModelEntry {
    title: string;
}

export interface Sheet {
    id: string;
    title: string;
    moduleNumber: ModuleNumber[];
    moduleString: ModuleString[];
    moduleInventory: ModuleInventory[];
}

export interface ModuleString {
    id: string;
    title: string;
    content: FieldString[]
}

export interface ModuleNumber {
    id: string;
    title: string;
    content: FieldNumber[];
}

export interface ModuleInventory {
    id: string;
    title: string;
    content: FieldInventory[];
}

export interface FieldString {
    id: string;
    name: string;
    content: string;
}

export interface FieldNumber {
    id: string;
    name: string;
    contentCur: number;
    contentMax?: number; 
}

export interface FieldInventory {
    id: string;
    name: string;
    content: string;
    quantity: number;
}


export default SheetModelEntry;