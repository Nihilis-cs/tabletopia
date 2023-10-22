'use client'
import { Button, Card, Select } from "antd";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

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
    const [result, setResult] = useState<number| undefined>();
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
            <Card title={<span className="text-2xl">Roll Dice</span>}
                className="shadow"
                actions={[
                    <Button type="primary" onClick={handleSubmit(onSubmit)} >Throw</Button>
                ]}>
                <form >
                    <div className="grid grid-cols-2">
                        <Controller
                            name="diceId"
                            control={control}
                            defaultValue="1"
                            render={({ field }) =>
                                <Select
                                    {...field}
                                    options={
                                        diceList.map((d) => { return { value: d.id, label: d.name } })
                                    }
                                />
                            }
                        />
                        {result != undefined &&
                            <div className="text-center">
                                <span className="text-xl drop-shadow-md"> Result: {result} </span>
                            </div>}
                    </div>
                </form>
            </Card>

        </>
    )
}

export default Dice;