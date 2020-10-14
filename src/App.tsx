import React, {useState} from 'react'
import s from './App.module.css'
import './App.css'
import {Button} from "./components/Button/Button"
import {CountBoard} from "./components/CountBoard/CountBoard"
import {SetBoard} from "./components/SetBoard/SetBoard"

export const App: React.FC = () => {

    const [maximumValue, setMaximumValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [value, setValue] = useState<number>(startValue)

    const setFunc = () => {
        setValue(startValue)
    }
    const incFunc = () => {
        (value >= startValue && value <= maximumValue) && setValue(value+1)
    }
    const resFunc = () => {setValue(0)}

    const disabledSetButton = (value: number) => {
        if (maximumValue > startValue && maximumValue !== startValue && maximumValue > 0 && startValue > 0) {
            return false
        }else {
            return true
        }
    }
    const disabledIncButton = (value: number) => value && value === 5 ? true : false
    const disabledResButton = (value: number) => !value ? true : false

    return (
        <div className={s.project}>
            <SetBoard  value={value} setFunc={setFunc} disabledSetButton={disabledSetButton}
                       maximumValue={maximumValue}
                       setMaximumValue={setMaximumValue}
                       startValue={startValue}
                       setStartValue={setStartValue}/>
            <div className='counter'>
                <CountBoard value={value} maxValue={maximumValue}/>
                <div className='buttons'>
                    <Button title={'inc'} buttonFunction={incFunc} value={value} disabledButton={disabledIncButton}/>
                    <Button title={'reset'} buttonFunction={resFunc} value={value} disabledButton={disabledResButton}/>
                </div>
            </div>

        </div>
    )
}
