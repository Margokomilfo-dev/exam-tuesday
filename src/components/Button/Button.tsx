import React from "react"
import s from './Button.module.css'

type ButtonPropsType = {
  title: string
  buttonFunction: () => void
  value: number
  disabledButton: (value: number) => boolean
}
export const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
  return (
      <div>
        <button onClick={props.buttonFunction} disabled={props.disabledButton(props.value)}
                className={s.button}>{props.title}</button>
      </div>
  )
}