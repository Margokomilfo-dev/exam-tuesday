import React, {ChangeEvent} from 'react'
import '../../App.css'
import s from './SetBoard.module.css'
import {Button} from "../Button/Button"
import {TextType} from "../../App"
import {useDispatch, useSelector} from "react-redux";
import {actionsCreators} from "../../store/counerReducer";
import {selectCounter} from "../../store/selectors";

export type SetBoardPropsType = {
    disabledSetButton: (value: number) => boolean
    text: string
    setText: (text: TextType) => void
}

export const SetBoard: React.FC<SetBoardPropsType> = (props: SetBoardPropsType) => {

    let dispatch = useDispatch()
    const {startValue, maximumValue} = useSelector(selectCounter);

    (startValue === 0 && maximumValue > 0) || (maximumValue > 0 && maximumValue > startValue && startValue >= 0)
        ? props.setText(`enter value and press 'set'`)
        : props.setText('Incorrect value!')

    const setFunc = () => {
        dispatch(actionsCreators.SettingAC(startValue))
    }
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
                           value= {maximumValue}/>
                </div>
                <div
                    className={s.inputBlock}>
                    <span>start value:</span>
                    <input onFocus={()=> {dispatch(actionsCreators.ChangeActiveStatusMin(true))}}
                           className={(props.text === 'Incorrect value!') ? `${s.inputBoard} ${s.inputBoardFire}` : `${s.inputBoard} `}
                           onChange={(e) => {onChangeStartValue(e)}} type="number"
                           value={startValue}/>
                </div>
            </div>
            <div className='buttons'>
                <Button title={'set'}
                        buttonFunction={setFunc}
                        disabledButton={props.disabledSetButton} />
            </div>
        </div>
    )
}
