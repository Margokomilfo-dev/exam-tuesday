import React, {useEffect, useState} from 'react'
import s from './App.module.css'
import './App.css'
import {Button} from "./components/Button/Button"
import {CountBoard} from "./components/CountBoard/CountBoard"
import {SetBoard} from "./components/SetBoard/SetBoard"
import {useDispatch, useSelector} from "react-redux";
import {selectCounter} from "./store/selectors";
import {actionsCreators} from "./store/counerReducer";

export type TextType = `enter value and press 'set'` | `Incorrect value!`

type GetValueType = string | null
let getMinValue: GetValueType = localStorage.getItem('min')
let getMaxValue: GetValueType = localStorage.getItem('max')

export const App: React.FC = () => {

    useEffect(() => {
        if (getMinValue && getMaxValue) {
            dispatch(actionsCreators.ChangeStartValue(+getMinValue))
            dispatch(actionsCreators.ChangeMaxValue(+getMaxValue))
        }
    },[])
    const [text, setText] = useState <TextType> (`enter value and press 'set'` )


    const {value, activeMinValue, activeMaxValue, startValue, maximumValue} = useSelector(selectCounter)
    let dispatch = useDispatch()



    //_________
    // const [maximumValue, setMaximumValue] = useState<number>(Number(getMaxValue))
    // const [startValue, setStartValue] = useState<number>(Number(getMinValue))
    // const [value, setValue] = useState<number>(0)
    //
    // const [activeMaxValue, setActiveMaxValue] = useState<boolean>(true)
    // const [activeMinValue, setActiveMinValue] = useState<boolean>(true)

    const setFunc = () => {
        dispatch(actionsCreators.SettingAC(startValue))
        // @ts-ignore
        localStorage.setItem('max', maximumValue.toString());
        // @ts-ignore
        localStorage.setItem('min', startValue.toString());

    }
    const incFunc = () => {
        (value >= startValue && value <= maximumValue) &&
        dispatch(actionsCreators.IncrementalAC(value))
    }
    const resFunc = () => {
        dispatch(actionsCreators.ResetAC())
    }
    //_________
    const disabledSetButton = (value: number) => {
        return !(maximumValue && startValue >= 0 && maximumValue > startValue && maximumValue !== startValue && maximumValue > 0 && startValue >= 0);
    }
    const disabledIncButton = (value: number) => {
        return !(value >= 0 && value < maximumValue && value >= startValue && (!activeMaxValue && !activeMinValue));
    }
    const disabledResButton = (value: number) => {
        return value <= 0;
    }

    return (
        <div className={s.project}>
            <SetBoard value={value} setFunc={setFunc} disabledSetButton={disabledSetButton}
                      maximumValue={maximumValue}
                      startValue={startValue}
                      activeMaxValue={activeMaxValue}
                      activeMinValue={activeMinValue}
                      text={text}
                      setText={setText}
            />
            <div className='counter'>
                <CountBoard value={value} maxValue={maximumValue} startValue={startValue}
                            text={text} setText={setText}
                            activeMaxValue={activeMaxValue} activeMinValue={activeMinValue}
                />
                <div className='buttons'>
                    <Button title={'inc'} buttonFunction={incFunc} value={value} disabledButton={disabledIncButton}/>
                    <Button title={'reset'} buttonFunction={resFunc} value={value} disabledButton={disabledResButton}/>
                </div>
            </div>

        </div>
    )
}
