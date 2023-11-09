'use client'
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dices } from "lucide-react";

export interface DiceToRoll {
    id: string;
    name: string;
    max: number;
    min: number;
    step?: number;
}

interface IFormInput {
    diceId: string;
}

function Dice() {
    const { control, handleSubmit, watch } = useForm<IFormInput>();
    const [result, setResult] = useState<number | undefined>();
    const diceList: DiceToRoll[] = [
        { id: "1", name: "D6", max: 6, min: 1 },
        { id: "2", name: "D8", max: 8, min: 1 },
        { id: "3", name: "D10", max: 10, min: 1 },
        { id: "4", name: "D12", max: 12, min: 1 },
        { id: "5", name: "D20", max: 20, min: 1 },
        { id: "6", name: "D100", max: 100, min: 1 },
        { id: "7", name: "D99/0 inclusive", max: 99, min: 0 },
    ];
    const rollDice = (dice: DiceToRoll): number => {
        var vRet = Math.floor(Math.random() * (dice.max - dice.min + 1) + dice.min);
        setResult(vRet);
        return vRet;
    }
    const onSubmit: SubmitHandler<IFormInput> = data => {
        var diceIndex = diceList.findIndex(x => x.id == data.diceId)
        rollDice(diceList[diceIndex]);
    };

    return (
        <>
            <Card >
                <form >
                    <CardHeader>
                        <div className="flex gap-2">
                            <Dices />
                            <span className="text-2xl">
                                Roll Dice
                            </span>
                        </div>

                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2">
                            <Controller
                                name="diceId"
                                control={control}
                                defaultValue="1"
                                render={({ field }) =>
                                    <Select onValueChange={field.onChange}>
                                        <SelectTrigger >
                                            <SelectValue placeholder="Choose a dice" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {diceList.map((d) => <SelectItem value={d.id} key={"dice"+d.id}>{d.name}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                }
                            />
                            {result != undefined &&
                                <div className="text-center">
                                    <span className="text-xl drop-shadow-md">Result: {result} </span>
                                </div>}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleSubmit(onSubmit)} className='text-foreground' >Throw</Button>
                    </CardFooter>
                </form>
            </Card >

        </>
    )
}

export default Dice;