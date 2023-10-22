'use client'
import { Sheet } from '@/types/Sheet';
import { Button, Card, Input } from 'antd';
import React from 'react'
import { Controller, ControllerFieldState, ControllerRenderProps, UseFormStateReturn, useFieldArray, useForm } from 'react-hook-form';

export default function CreateModel() {
    const { control, watch, handleSubmit, formState } = useForm<Sheet>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "moduleNumber",
      });
    const createSheet = (data: Sheet) => {
        console.log(data);
    }

    return (
        <>
            <div>CreateModel</div>
            <form>
                <Card title='Sheet Info'>
                    <Controller
                        control={control}
                        name='title'
                        rules={{required: true}}
                        render={({field, fieldState}) => {
                            return (
                                <div className='grid grid-cols-2'>
                                    <span className='text-xl'>Title</span>
                                    <Input allowClear {...field} />
                                    {fieldState.error && <div>{fieldState.error.message}</div>}
                                </div>
                            );
                        }}
                    />
                </Card>
                <Card title='Number Module'>
                    {/* <Controller
                        control={control}
                        name='moduleNumber'
                        render={({field, fieldState}) => {
                            return (
                                <div className='grid grid-cols-2'>
                                    <span className='text-xl'>Module Number</span>
                                    <Input allowClear {...field} />
                                </div>
                            );
                        }}
                    /> */}
                </Card>

                {formState.isValid &&
                    <Button type="primary" onClick={handleSubmit(createSheet)}>
                        Submit
                    </Button>
                }
                {!formState.isValid &&
                    <Button type="dashed">
                        Submit
                    </Button>}
            </form>
        </>

    )
}
