import React, {useState} from 'react'
import '../../App.css'
import s from './SetBoard.module.css'
import {Button} from "../Button/Button";

type SetBoardPropsType = {
    value: number
    setFunc: () => void
    disabledSetButton: (value: number) => boolean
}
export const SetBoard: React.FC<SetBoardPropsType> = (props: SetBoardPropsType) => {
    return (
        <div className='counter'>
            <div className={s.board}>
                <div className={s.inputBlock}>
                    <span>max value: </span> <input className={`${s.inputBoard} ${s.maxValue}`} type="number"/>
                </div>
                <div className={s.inputBlock}>
                    <span>start value:</span> <input className={`${s.inputBoard} ${s.startValue}`} type="number"/>
                </div>
            </div>
            <div className='buttons'>
                <Button title={'set'} buttonFunction={props.setFunc} value={props.value}
                        disabledButton={props.disabledSetButton}/>
            </div>
        </div>
    )
}
