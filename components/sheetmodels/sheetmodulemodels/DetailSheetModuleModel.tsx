'use client'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { SheetModuleModel } from '@/types/Sheet';
import React from 'react'

interface ModuleModelDetailProps {
    module: SheetModuleModel;
}
export default function DetailSheetModuleModel({ module }: ModuleModelDetailProps) {

    return (
        <Card>
            <CardHeader>
                <div className="text-xl">
                    {module.title}
                </div>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col'>
                    {module.fields?.map((field) => {
                        return (
                            <div>
                                {field.name.toString()}
                            </div>
                        )
                    })}
                </div>
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    );

}
