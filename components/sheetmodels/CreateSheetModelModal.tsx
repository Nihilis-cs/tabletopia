'use client'
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Controller, useForm } from "react-hook-form";
import { CreateSheetModel } from "@/types/Sheet";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/supabase";
import { useQueryClient } from "@tanstack/react-query";
import { sheetmodelkeys, sheetmodelqueries } from "@/services/sheetmodelqueries";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";

export default function CreateSheetModelModal() {
    const { control, handleSubmit, formState } = useForm<CreateSheetModel>({ defaultValues: { title: '' } });
    const [open, setOpen] = useState<boolean>(false);
    const queryClient = useQueryClient();
    const onSubmit = async (data: CreateSheetModel) => {
        const supabase = createClientComponentClient<Database>();
        const vRes = await sheetmodelqueries.createModel(data);
        queryClient.invalidateQueries({ queryKey: sheetmodelkeys.listAll() });
        setOpen(false);
    };

    return (
        <AlertDialog open={open} >
            <AlertDialogTrigger asChild>
                <Button variant={"outline"} onClick={() => setOpen(!open)} ><Plus /></Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <AlertDialogHeader className="pb-4">
                        <AlertDialogTitle className="pb-2">Create new sheet model</AlertDialogTitle>
                        <AlertDialogDescription className="pb-2">
                            Create a new sheet model here. You'll then be able to add content by selecting it in the list.
                        </AlertDialogDescription>
                        <Separator />
                    </AlertDialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Controller
                                control={control}
                                name="title"
                                rules={{ required: true }}
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
                        </div>
                    </div>
                    <AlertDialogFooter>
                        <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button className="px-4 py-2 text-foreground mb-2" type="submit" >
                            Create
                        </Button>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    )
}
