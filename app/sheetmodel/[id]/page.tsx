import { sheetmodelkeys, sheetmodelqueries } from "@/services/sheetmodelqueries";
import { SheetModelEntry } from "@/types/Sheet";
import { useQuery } from "@tanstack/react-query";

export default function Page({ params }: { params: { id: string } }) {

  const useSheetModel = () => {
    return useQuery<SheetModelEntry>({
      queryKey: sheetmodelkeys.byId(params.id),
      queryFn: async () => {
        const vRet = await sheetmodelqueries.byId(params.id);
        return vRet;
      }
    });
  };
  const { isLoading, data: sheet, refetch } = useSheetModel();

  return <div>My Post: {params.id}</div>
}