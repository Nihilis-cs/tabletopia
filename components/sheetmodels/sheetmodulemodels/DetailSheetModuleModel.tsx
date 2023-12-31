'use client'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { SheetModelDetails, SheetModuleModel } from '@/types/Sheet';
import React, { useState } from 'react'
import StatsModuleFieldsModel from './StatsModuleFieldsModel';
import StringModuleFieldsModel from './StringModuleFieldsModel';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

interface ModuleModelDetailProps {
    module: SheetModuleModel;
    isUpdating: boolean;
    moduleIndex: number;
}
export default function DetailSheetModuleModel({ module, isUpdating, moduleIndex }: ModuleModelDetailProps) {

    const Module = () => {
        if (module.type == "Stats") return <StatsModuleFieldsModel module={module} moduleIndex={moduleIndex} isUpdating={isUpdating} key={'module_' + moduleIndex}/>
        if (module.type == "String") return <StringModuleFieldsModel module={module} moduleIndex={moduleIndex} isUpdating={isUpdating} key={'module_' + moduleIndex}/>
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex flex-row gap-4">
                    <div className="text-xl">
                        {module.title}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Module />
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    );

}
