import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { Plus } from 'lucide-react';
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { CreateSheetModuleModel, SheetModuleModelForm } from '@/types/Sheet';
import { useQueryClient } from '@tanstack/react-query';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { sheetmodelkeys, sheetmodelqueries } from '@/services/sheetmodelqueries';
interface AddModuleModalProps {
    sheetId: string;
}
export default function AddModuleModal({ sheetId }: AddModuleModalProps) {
    const { control, handleSubmit, formState } = useForm<SheetModuleModelForm>();
    const [open, setOpen] = useState<boolean>(false);
    const queryClient = useQueryClient();
    const selectItems = [
        { key: 1, value: "String", label: "String" },
        { key: 2, value: "Stats", label: "Stats" },
        //{key: 3, value: "Inventory", label: "Inventory" },
    ]
    const onSubmit = async (data: SheetModuleModelForm) => {
        console.log(data);
        var vData: CreateSheetModuleModel = {
            sheetId: sheetId,
            title: data.title,
            type: data.type,
            fields: data.fields,
        }
        await sheetmodelqueries.addModule(vData)
        queryClient.invalidateQueries({ queryKey: sheetmodelkeys.byId(sheetId) });
    };
    return (
        <Dialog open={open} >
            <DialogTrigger asChild>
                <Button variant={"outline"} onClick={() => setOpen(!open)} ><Plus /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogHeader className="pb-4">
                        <DialogTitle className="pb-2">Add new module</DialogTitle>
                        <DialogDescription className="pb-2">
                            Create a new module here.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Controller
                                control={control}
                                name="title"
                                rules={{ required: true, minLength: 1 }}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <Label className="text-right col-span-1 w-full">
                                                Name
                                            </Label>
                                            <Input {...field} className="col-span-2 w-full" />
                                            {fieldState.error && <div>{fieldState.error.message}</div>}
                                        </>
                                    )
                                }}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Controller
                                control={control}
                                name="type"
                                rules={{ required: true }}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <Label className="text-right col-span-1 w-full">
                                                Type
                                            </Label>
                                            <div className="col-span-2 w-full">
                                                <Select {...field}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {selectItems.map((item) => {
                                                            return (
                                                                <SelectItem key={"select" + item.key} value={item.value}>{item.label}</SelectItem>
                                                            )
                                                        })}
                                                    </SelectContent>
                                                </Select>
                                                {fieldState.error && <div>{fieldState.error.message}</div>}
                                            </div>
                                        </>
                                    )
                                }}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button className="px-4 py-2 text-foreground mb-2" type='submit' disabled={formState.isValid} >
                            Create
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
