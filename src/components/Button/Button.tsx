import React from "react"
import s from './Button.module.css'
import {useSelector} from "react-redux";
import {selectCounter} from "../../store/selectors";

export type ButtonPropsType = {
    title: string
    buttonFunction: () => void
    disabledButton: (value: number) => boolean
}
export const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
    const {value} = useSelector(selectCounter);
    return (
        <div>
            <button onClick={props.buttonFunction} disabled={props.disabledButton(value)}
                    className={s.button}>{props.title}</button>
        </div>
    )
}