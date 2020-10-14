import React, {useState} from 'react'
import s from './App.module.css'
import './App.css'
import {Button} from "./components/Button/Button"
import {CountBoard} from "./components/CountBoard/CountBoard"

export const App: React.FC = () => {
    const [value, setValue] = useState<number>(0)
    const minValue: number = 0
    const maxValue: number = 5
    const incFunc = () => {
        (value >= minValue && value < maxValue) && setValue(value+1)
    }
    const resFunc = () => {setValue(0)}

    const disabledIncButton = (value: number) => value && value === 5 ? true : false
    const disabledResButton = (value: number) => !value ? true : false

    return (
        <div className={s.counter}>
            <CountBoard value={value} maxValue={maxValue}/>
            <div className={s.buttons}>
                <Button title={'inc'} buttonFunction={incFunc} value={value} disabledButton={disabledIncButton}/>
                <Button title={'reset'} buttonFunction={resFunc} value={value} disabledButton={disabledResButton}/>
            </div>

        </div>
    )
}
