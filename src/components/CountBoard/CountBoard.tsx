import React from 'react'
import s from './CountBoard.module.css'
import { TextType } from '../../App'
import {useSelector} from "react-redux";
import {selectCounter} from "../../store/selectors";

export type CountBoardPropsType = {
    text: string
    setText: (text: TextType) => void
}

export const CountBoard: React.FC<CountBoardPropsType> = (props: CountBoardPropsType) => {
    const {value, activeMinValue, activeMaxValue, startValue, maximumValue} = useSelector(selectCounter)

    return (
        <div className={s.board}>
            { startValue < 0 ||  maximumValue < 0 || activeMaxValue || activeMinValue
                ? <div className={(props.text === 'Incorrect value!') ? s.errorText : s.text }> {props.text}</div>
                : <div className={(value === maximumValue) ? s.maxInc : s.value}>{value}</div>
            }
        </div>
    )
}
