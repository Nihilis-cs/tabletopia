'use client'
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FieldModel, SheetModelDetails, SheetModuleModel } from '@/types/Sheet';
import { Separator } from '@radix-ui/react-separator';
import { Plus } from 'lucide-react';
import React, { MouseEvent, useState } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';

interface StatsModelDetailProps {
    module: SheetModuleModel;
    isUpdating: boolean;
    moduleIndex: number;
}
interface FieldModelProps {
    field: FieldModel;
    index: number;
}

export default function StatsModuleFieldsModel({ module, moduleIndex, isUpdating }: StatsModelDetailProps) {
    const { control, register } = useFormContext<SheetModelDetails>();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: `modules.${moduleIndex}.fields`,
        keyName: 'id'
    });
    
    const newStatField = {
        name: 'new stat',
    }
    const addField = (e: MouseEvent) => {
        append(newStatField);
        console.log("new field");
        e.preventDefault();
    }

    const StatField = ({ field, index }: FieldModelProps) => {
        return (
            <Card className='hover:bg-primary-foreground'>
                <div className='flex flex-col items-center'>
                    {isUpdating &&
                        <>
                            <Controller
                                control={control}
                                name={`modules.${moduleIndex}.fields.${index}.name`}
                                render={({ field }) => {
                                    return (
                                        <>
                                            <Label className="text-right col-span-1 w-full">
                                                Name
                                            </Label>
                                            <Input {...field} className="col-span-2 w-full" />
                                        </>);
                                }}
                            />
                            <Controller
                                control={control}
                                name={`modules.${moduleIndex}.fields.${index}.min_value`}
                                render={({ field }) => {
                                    return (
                                        <>
                                            <Label className="text-right col-span-1 w-full">
                                                Min
                                            </Label>
                                            <Input type="number" {...field} className="col-span-2 w-full" />
                                        </>);
                                }}
                            />
                            <Controller
                                control={control}
                                name={`modules.${moduleIndex}.fields.${index}.max_value`}
                                render={({ field }) => {
                                    return (
                                        <>
                                            <Label className="text-right col-span-1 w-full">
                                                Max
                                            </Label>
                                            <Input type="number" {...field} className="col-span-2 w-full" />
                                        </>);
                                }}
                            />
                        </>
                    }
                    {!isUpdating &&
                        <>
                            <div className='text-lg text-primary'>{field?.name}</div>
                            <div className='text-sm'>Min: {field?.min_value}</div>
                            <div className='text-sm'>Max: {field?.max_value}</div>
                        </>
                    }
                </div>
            </Card>
        )
    }


    return (
        <div className='grid grid-cols-6 gap-2 items-center'>
            {module.fields?.map((field, index) => {
                return (
                    <StatField field={field} key={'field' + index} index={index} {...register} />);
            })}
            {isUpdating &&
                    <Button variant={"default"} size={'sm'} onClick={(e) => addField(e)} ><Plus /></Button>
            }

        </div>
    )
}
