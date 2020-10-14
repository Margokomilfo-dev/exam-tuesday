import React, {useState} from 'react'
import s from './CountBoard.module.css'

type CountBoardPropsType = {
  value: number
  maxValue: number
}
export const CountBoard: React.FC<CountBoardPropsType> = (props: CountBoardPropsType) => {
  return (
      <div className={s.board}>
        <div className={(props.value === props.maxValue) ? s.maxInc : s.value}>{props.value}</div>
      </div>
  )
}
