'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { useQuery } from '@tanstack/react-query';
import { SheetModelDetails } from '@/types/Sheet';
import { sheetmodelkeys, sheetmodelqueries } from '@/services/sheetmodelqueries';
import DetailSheetModuleModel from './sheetmodulemodels/DetailSheetModuleModel';
import { Menubar, MenubarContent, MenubarItem, MenubarLabel, MenubarMenu, MenubarTrigger } from '../ui/menubar';
import { Menu, PenSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import AddModuleModal from './sheetmodulemodels/AddModuleModal';

interface DetailSheetModelProps {
    id: string;
}

export default function DetailSheetModel({ id }: DetailSheetModelProps) {
    const [isUpdating, setUpdating] = useState<boolean>(false);
    const { control, reset } = useForm<SheetModelDetails>()
    const useSheetModelDetails = () => {
        return useQuery<SheetModelDetails>({
            queryKey: sheetmodelkeys.byId(id),
            queryFn: async () => {
                const vRet = await sheetmodelqueries.byId(id);
                reset(vRet);
                return vRet;
            }
        });
    };
    const { isLoading, data: sheet, refetch } = useSheetModelDetails();

    return (
        <Card>
            <CardHeader className='flex flex-row gap-4 justify-between'>
                <CardTitle className='flex flex-row justify-around gap-2' >
                    <div className='flex flex-row justify-between gap-2' >
                        <div className='flex flex-row gap-4' >
                            <div className="text-3xl text-primary align-bottom">{sheet?.name}</div>
                            <Button variant={"outline"} onClick={() => setUpdating(true)}>
                                <PenSquare />
                            </Button>
                        </div>
                        <div>
                            {isUpdating &&
                                <AddModuleModal sheetId={sheet ? sheet.id : ''}></AddModuleModal>
                            }
                        </div>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-2">
                    {sheet?.modules &&
                        sheet.modules.map((mod, index) => {
                            return (
                                <DetailSheetModuleModel module={mod} isUpdating={isUpdating} key={"module" + index} />
                            );
                        })
                    }
                </div>
            </CardContent>
            <CardFooter className='flex flex-row justify-end gap-4'>
                {isUpdating &&
                    <div className='flex flex-row justify-end gap-4'>
                        <Button variant={'default'} size={'sm'}>Save Changes</Button>
                        <Button variant={'outline'} onClick={() => setUpdating(false)}>Cancel</Button>
                    </div>
                }
            </CardFooter>
        </Card >);

}
