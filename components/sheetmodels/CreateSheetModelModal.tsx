'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Controller, useForm } from "react-hook-form";
import { CreateSheetModel } from "@/types/Sheet";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/supabase";
import axios from "axios";

export default function CreateSheetModelModal() {
    const { control, handleSubmit, formState } = useForm<CreateSheetModel>({ defaultValues: { title: '' } });

    const onSubmit = async (data: CreateSheetModel) => {
        const supabase = createClientComponentClient<Database>();
        console.log(data);
        const vRes = await axios.post<CreateSheetModel>('/api/sheetmodel/create', data);
        console.log(vRes);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"} ><Plus /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogHeader className="pb-4">
                        <DialogTitle className="pb-2">Create new sheet model</DialogTitle>
                        <DialogDescription className="pb-2">
                            Create a new sheet model here. You'll then be able to add content by selecting it in the list.
                        </DialogDescription>
                        <Separator />
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Controller
                                control={control}
                                name="title"
                                rules={{ required: true }}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <Label className="text-right">
                                                Name
                                            </Label>
                                            <Input {...field} />
                                            {fieldState.error && <div>{fieldState.error.message}</div>}
                                        </>
                                    )
                                }}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                        </div>
                    </div>
                    <DialogFooter>
                        <Button className="px-4 py-2 text-foreground mb-2" type="submit" >
                            Create
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
