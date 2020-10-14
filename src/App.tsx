import React, {useState} from 'react'
import s from './App.module.css'
import './App.css'
import {Button} from "./components/Button/Button"
import {CountBoard} from "./components/CountBoard/CountBoard"
import {SetBoard} from "./components/SetBoard/SetBoard"

export type TextType = ''| `enter value and press 'set'` | `Incorrect value!`

export const App: React.FC = () => {

    const [maximumValue, setMaximumValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(-1)
    const [value, setValue] = useState<number>(startValue)
    const [text, setText] = useState <TextType> ('' )


    const [activeMaxValue, setActiveMaxValue] = useState<boolean>(false)
    const [activeMinValue, setActiveMinValue] = useState<boolean>(false)


    const setFunc = () => {
        setValue(startValue)
        setActiveMinValue(false)
        setActiveMaxValue(false)
    }
    const incFunc = () => {
        (value >= startValue && value <= maximumValue) && setValue(value + 1)
    }
    const resFunc = () => {
        setValue(0)
    }

    const disabledSetButton = (value: number) => {
        if (maximumValue && startValue >= 0  && maximumValue > startValue && maximumValue !== startValue && maximumValue > 0 && startValue >= 0) {
            return false
        }else {
            return true
        }
    }
    const disabledIncButton = (value: number) => {
        if (value >= 0  && value < maximumValue && value >= startValue  ) {
            return false
        } else {
            return true
        }
    }
    const disabledResButton = (value: number) => {
        if (value <= 0 ) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className={s.project}>
            <SetBoard  value={value} setFunc={setFunc} disabledSetButton={disabledSetButton}
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
                            text={text} setText={setText} activeMaxValue={activeMaxValue} activeMinValue={activeMinValue}/>
                <div className='buttons'>
                    <Button title={'inc'} buttonFunction={incFunc} value={value} disabledButton={disabledIncButton}/>
                    <Button title={'reset'} buttonFunction={resFunc} value={value} disabledButton={disabledResButton}/>
                </div>
            </div>

        </div>
    )
}
