import React, {useState} from 'react'
import s from './App.module.css'
import './App.css'
import {Button} from "./components/Button/Button"
import {CountBoard} from "./components/CountBoard/CountBoard"
import {SetBoard} from "./components/SetBoard/SetBoard"

export type TextType = `enter value and press 'set'` | `Incorrect value!`

type getValueType = string | null
export let getMinValue: getValueType = localStorage.getItem('min')
export let getMaxValue: getValueType = localStorage.getItem('max')

export const App: React.FC = () => {

    const [maximumValue, setMaximumValue] = useState<number>(Number(getMaxValue))
    const [startValue, setStartValue] = useState<number>(Number(getMinValue))
    const [value, setValue] = useState<number>(0)
    const [text, setText] = useState <TextType> (`enter value and press 'set'` )
    const [activeMaxValue, setActiveMaxValue] = useState<boolean>(true)
    const [activeMinValue, setActiveMinValue] = useState<boolean>(true)

    const setFunc = () => {
        setValue(startValue)
        setActiveMinValue(false)
        setActiveMaxValue(false)
        localStorage.setItem('max', maximumValue.toString());
        localStorage.setItem('min', startValue.toString());

    }
    const incFunc = () => {
        (value >= startValue && value <= maximumValue) && setValue(value + 1)
    }
    const resFunc = () => {
        setValue(0)
    }

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
                      setMaximumValue={setMaximumValue}
                      startValue={startValue}
                      setStartValue={setStartValue}
                      activeMaxValue={activeMaxValue}
                      setActiveMaxValue={setActiveMaxValue}
                      activeMinValue={activeMinValue}
                      setActiveMinValue={setActiveMinValue}
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
