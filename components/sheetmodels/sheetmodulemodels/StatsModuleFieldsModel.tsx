'use client'
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { FieldModel, SheetModuleModel } from '@/types/Sheet';
import { Separator } from '@radix-ui/react-separator';
import React from 'react'

interface StatsModelDetailProps {
    module: SheetModuleModel;
}
interface FieldModelProps {
    field: FieldModel;
}

export default function StatsModuleFieldsModel({ module }: StatsModelDetailProps) {

    const StatField = ({ field }: FieldModelProps) => {
        return (
            <Card className='hover:bg-primary-foreground'>
                <div className='flex flex-col items-center'>
                    <div className='text-lg text-primary'>{field?.name}</div>
                    <Separator />
                    <div className='text-sm'>Min: {field?.min_value}</div>
                    <div className='text-sm'>Max: {field?.max_value}</div>
                </div>
            </Card>
        )
    }


    return (
        <div className='grid grid-cols-6 gap-2 '>
            {module.fields?.map((field) => {
                return (
                    <StatField field={field} />);
            })}
            
        </div>
    )
}
