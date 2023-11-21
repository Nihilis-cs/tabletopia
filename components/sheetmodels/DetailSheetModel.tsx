'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useQuery } from '@tanstack/react-query';
import { SheetModelDetails } from '@/types/Sheet';
import { sheetmodelkeys, sheetmodelqueries } from '@/services/sheetmodelqueries';
import DetailSheetModuleModel from './sheetmodulemodels/DetailSheetModuleModel';
import { Menubar, MenubarContent, MenubarItem, MenubarLabel, MenubarMenu, MenubarTrigger } from '../ui/menubar';
import { Menu } from 'lucide-react';

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

    const addModule = () => {}

    return (
        <Card>
            <CardHeader className='flex flex-row gap-4 justify-between'>
                <CardTitle><div className="text-3xl text-primary">{sheet?.name}</div></CardTitle>
                <CardDescription>
                    <div className='pt-0'>
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>Modules</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem onClick={() => addModule()}>Add module</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Sheet</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>Delete sheet</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarLabel className='text-primary'><Menu /></MenubarLabel>
                        </Menubar>
                    </div>
                </CardDescription>
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
