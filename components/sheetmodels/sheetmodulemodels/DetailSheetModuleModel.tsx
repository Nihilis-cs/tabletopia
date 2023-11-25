'use client'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { SheetModuleModel } from '@/types/Sheet';
import React, { useState } from 'react'
import StatsModuleFieldsModel from './StatsModuleFieldsModel';
import StringModuleFieldsModel from './StringModuleFieldsModel';

interface ModuleModelDetailProps {
    module: SheetModuleModel;
    isUpdating: boolean;
}
export default function DetailSheetModuleModel({ module, isUpdating }: ModuleModelDetailProps) {
    
    const Module = () => {
        if (module.type == "Stats") return <StatsModuleFieldsModel module={module} />
        if (module.type == "String") return <StringModuleFieldsModel module={module} />
    }
    return (
        <Card>
            <CardHeader>
                <div className="text-xl">
                    {module.title}
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
