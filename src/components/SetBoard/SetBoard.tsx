import React, {ChangeEvent, useState} from 'react'
import '../../App.css'
import s from './SetBoard.module.css'
import {Button} from "../Button/Button";
import {rename} from "fs";

type SetBoardPropsType = {
    value: number
    setFunc: () => void
    disabledSetButton: (value: number) => boolean
    maximumValue: number
    setMaximumValue: (value: number) => void
    startValue: number
    setStartValue: (value: number) => void
}
export const SetBoard: React.FC<SetBoardPropsType> = (props: SetBoardPropsType) => {
    
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue: number = Number(e.currentTarget.value)
        props.setMaximumValue(maxValue)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue = Number(e.currentTarget.value)
        props.setStartValue(startValue)
    }

    return (
        <div className='counter'>
            <div className={s.board}>
                <div className={s.inputBlock}>
                    <span>max value: </span> <input className={`${s.inputBoard} ${s.maxValue}`}
                                                    onChange={(e) => {
                                                        onChangeMaxValue(e)}} type="number"/>
                </div>
                <div className={s.inputBlock}>
                    <span>start value:</span> <input className={`${s.inputBoard} ${s.startValue}`}
                                                     onChange={(e)=> {onChangeStartValue(e)}} type="number"/>
                </div>
            </div>
            <div className='buttons'>
                <Button title={'set'} buttonFunction={props.setFunc} value={props.value}
                        disabledButton={props.disabledSetButton}/>
            </div>
        </div>
    )
}
