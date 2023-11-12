import { SheetModuleModel } from '@/types/Sheet';
import React from 'react'

interface StatsModelDetailProps {
    module: SheetModuleModel;
}

export default function StatsModuleFieldsModel({ module }: StatsModelDetailProps) {
  return (
    <div className='flex flex-row '>
    {module.fields?.map((field) => {
        return (
            <div>
                {field?.name.toString()}
            </div>
        )
    })}
</div>
  )
}
