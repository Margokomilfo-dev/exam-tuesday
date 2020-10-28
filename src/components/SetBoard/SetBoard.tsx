import React, {ChangeEvent} from 'react'
import '../../App.css'
import s from './SetBoard.module.css'
import {Button} from "../Button/Button"
import {TextType} from "../../App"

type SetBoardPropsType = {
    value: number
    setFunc: () => void
    disabledSetButton: (value: number) => boolean
    maximumValue: number
    setMaximumValue: (value: number) => void
    startValue: number
    setStartValue: (value: number) => void
    activeMaxValue: boolean
    setActiveMaxValue: (value: boolean) => void
    activeMinValue: boolean
    setActiveMinValue: (value: boolean) => void
    text: string
    setText: (text: TextType) => void
}

export const SetBoard: React.FC<SetBoardPropsType> = (props: SetBoardPropsType) => {
    (props.startValue === 0 && props.maximumValue > 0) || (props.maximumValue > 0 && props.maximumValue > props.startValue && props.startValue >= 0)
        ? props.setText(`enter value and press 'set'`)
        : props.setText('Incorrect value!')

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setActiveMaxValue(true)
        let maxCurrentValue: number = Number(e.currentTarget.value)
        props.setMaximumValue(maxCurrentValue)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setActiveMinValue(true)
        props.setStartValue(0)
        let startCurrentValue = Number(e.currentTarget.value)
        props.setStartValue(startCurrentValue)
    }

    return (
        <div className='counter'>
            <div className={s.board}>
                <div className={s.inputBlock}>
                    <span>max value: </span>
                    <input onFocus={()=> {props.setActiveMaxValue(true)}}
                           className={(props.text === 'Incorrect value!') ? `${s.inputBoard} ${s.inputBoardFire}` : `${s.inputBoard} `}
                           onChange={(e) => {onChangeMaxValue(e)}} type="number"
                           value= {props.maximumValue}/>
                </div>
                <div
                    className={s.inputBlock}>
                    <span>start value:</span>
                    <input onFocus={()=> {props.setActiveMinValue(true)}}
                           className={(props.text === 'Incorrect value!') ? `${s.inputBoard} ${s.inputBoardFire}` : `${s.inputBoard} `}
                           onChange={(e) => {onChangeStartValue(e)}} type="number"
                           value={props.startValue}/>
                </div>
            </div>
            <div className='buttons'>
                <Button title={'set'} buttonFunction={props.setFunc} value={props.value}
                        disabledButton={props.disabledSetButton} />
            </div>
        </div>
    )
}
