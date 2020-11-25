import React, {ChangeEvent} from 'react'
import '../../App.css'
import s from './SetBoard.module.css'
import {Button} from "../Button/Button"
import {TextType} from "../../App"
import {useDispatch} from "react-redux";
import {actionsCreators} from "../../store/counerReducer";

type SetBoardPropsType = {
    value: number
    setFunc: () => void
    disabledSetButton: (value: number) => boolean
    maximumValue: number
    startValue: number
    activeMaxValue: boolean
    activeMinValue: boolean
    text: string
    setText: (text: TextType) => void
}

export const SetBoard: React.FC<SetBoardPropsType> = (props: SetBoardPropsType) => {
    (props.startValue === 0 && props.maximumValue > 0) || (props.maximumValue > 0 && props.maximumValue > props.startValue && props.startValue >= 0)
        ? props.setText(`enter value and press 'set'`)
        : props.setText('Incorrect value!')

    let dispatch = useDispatch()

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actionsCreators.ChangeMaxValueWithStatus((Number(e.currentTarget.value)), true))
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actionsCreators.ChangeStartValueWithStatus((Number(e.currentTarget.value)), true))
    }

    return (
        <div className='counter'>
            <div className={s.board}>
                <div className={s.inputBlock}>
                    <span>max value: </span>
                    <input onFocus={()=> {dispatch(actionsCreators.ChangeActiveStatusMax(true))}}
                           className={(props.text === 'Incorrect value!') ? `${s.inputBoard} ${s.inputBoardFire}` : `${s.inputBoard} `}
                           onChange={(e) => {onChangeMaxValue(e)}} type="number"
                           value= {props.maximumValue}/>
                </div>
                <div
                    className={s.inputBlock}>
                    <span>start value:</span>
                    <input onFocus={()=> {dispatch(actionsCreators.ChangeActiveStatusMin(true))}}
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
