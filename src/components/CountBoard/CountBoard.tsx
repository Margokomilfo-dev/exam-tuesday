import React from 'react'
import s from './CountBoard.module.css'
import { TextType } from '../../App'

type CountBoardPropsType = {
    value: number
    maxValue: number
    startValue: number
    text: string
    setText: (text: TextType) => void
    activeMaxValue: boolean
    activeMinValue: boolean
}

export const CountBoard: React.FC<CountBoardPropsType> = (props: CountBoardPropsType) => {

    return (
        <div className={s.board}>
            { props.startValue < 0 ||  props.maxValue < 0 || props.activeMaxValue || props.activeMinValue
                ? <div className={(props.text === 'Incorrect value!') ? s.errorText : s.text }> {props.text}</div>
                : <div className={(props.value === props.maxValue) ? s.maxInc : s.value}>{props.value}</div>
            }
        </div>
    )
}
