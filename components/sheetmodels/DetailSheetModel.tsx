'use client'
import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card';
import { useQuery } from '@tanstack/react-query';
import { SheetModelDetails } from '@/types/Sheet';
import { sheetmodelkeys, sheetmodelqueries } from '@/services/sheetmodelqueries';
import DetailSheetModuleModel from './sheetmodulemodels/DetailSheetModuleModel';

interface DetailSheetModelProps {
    id: string;
}

export default function DetailSheetModel({ id }: DetailSheetModelProps) {
    const useSheetModelDetails = () => {
        return useQuery<SheetModelDetails>({
            queryKey: sheetmodelkeys.byId(id),
            queryFn: async () => {
                const vRet = await sheetmodelqueries.byId(id);
                return vRet;
            }
        });
    };
    const { isLoading, data: sheet, refetch } = useSheetModelDetails();

    return (
        <Card>
            <CardHeader>
                <div className="text-2xl text-primary">{sheet?.name}</div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-2">
                    {sheet?.modules &&
                        sheet.modules.map((mod) => {
                            return (
                                <DetailSheetModuleModel module={mod} />
                            );
                        })


                    }
                </div>
            </CardContent>
        </Card>);

}
