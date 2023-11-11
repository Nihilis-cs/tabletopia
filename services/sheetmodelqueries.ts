import { CreateSheetModel, SheetModelDetails, SheetModelEntry } from "@/types/Sheet";
import axios from "axios";


export const sheetmodelqueries = {
    listAll,
    byId,
    createModel,
};
export const sheetmodelkeys = {
    all : ['sheetmodel'] as const,
    listAll: () => [...sheetmodelkeys.all, 'all'] as const,
    byId: (id: string) => [...sheetmodelkeys.all, "byId", id ] as const,
};

async function listAll() {
    var vRet = await axios.get<SheetModelEntry[]>('/api/sheetmodel/list');
    return vRet.data;
};

async function byId(id: string) {
    var vRet = await axios.get<SheetModelDetails>('/api/sheetmodel/' + id);
    return vRet.data;
};

async function createModel(data: CreateSheetModel) {
    var vRet = await axios.post<CreateSheetModel>('/api/sheetmodel/create', data);
    return vRet;
}