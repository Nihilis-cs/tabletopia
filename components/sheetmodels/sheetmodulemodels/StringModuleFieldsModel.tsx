'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SheetModuleModel } from '@/types/Sheet';
import React from 'react'

interface StringModelDetailProps {
    module: SheetModuleModel;
    moduleIndex: number;
    isUpdating: boolean;
}

export default function SringModuleFieldsModel({ module, moduleIndex, isUpdating }: StringModelDetailProps) {
    const newStringField = {
        name: 'new string'
    }

    
    return (
        <div className='grid grid-cols-2'>
        <Table>
            <TableBody >
               {module.fields?.map((field, index) =>
                <TableRow key={"field_"+index} >
                    <TableCell className='p-2'>
                       <div className=''>{field?.name}</div> 
                    </TableCell>
                    <TableCell className='p-2'>
                        <div className='text-secondary'>Text</div>
                    </TableCell>
                </TableRow>
                )}
            </TableBody>
        </Table>
        </div>
    )
}
