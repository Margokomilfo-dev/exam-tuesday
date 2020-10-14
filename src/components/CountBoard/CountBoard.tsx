import React, {useState} from 'react'
import s from './CountBoard.module.css'

type CountBoardPropsType = {
    value: number
    maxValue: number
    text: string
    activeMaxValue: boolean
    activeMinValue: boolean
}
export const CountBoard: React.FC<CountBoardPropsType> = (props: CountBoardPropsType) => {
    return (
        <div className={s.board}>
            {props.activeMaxValue || props.activeMinValue || props.value === 0
                ? <div>{props.text}</div>
                : <div className={(props.value === props.maxValue) ? s.maxInc : s.value}>{props.value}</div>
            }
        </div>
    )
}
