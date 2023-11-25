import { CreateSheetModel, CreateSheetModuleModel, SheetModelDetails, SheetModelEntry, SheetModuleModelForm } from "@/types/Sheet";
import axios from "axios";


export const sheetmodelqueries = {
    listAll,
    byId,
    createModel,
    addModule,
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
async function addModule(data: CreateSheetModuleModel)
{
    var vRet = await axios.post<CreateSheetModuleModel>('/api/sheetmodel/module', data);
    return vRet;
}