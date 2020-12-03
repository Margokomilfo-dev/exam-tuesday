import {actionsCreators, counterReducer, InitStateType} from "./counerReducer";

let initState: InitStateType
beforeEach(()=> {
    initState = {
        value: 5,
        activeMinValue: true,
        activeMaxValue: true,
        startValue: 1,
        maximumValue: 2,
    }
})
test('Increment of number', ()=>{
    let a:number = 2
    let newState = counterReducer(initState, actionsCreators.IncrementalAC(a))

    expect(newState.value).toBe(3)
})

test('Reset of number', ()=>{
    let newState = counterReducer(initState, actionsCreators.ResetAC())

    expect(newState.value).toBe(0)
})

test('Setting new parameters', ()=>{
    let newValue = 2
    let newState = counterReducer(initState, actionsCreators.SettingAC(newValue))

    expect(newState.value).toBe(2)
    expect(newState.activeMinValue).toBe(false)
    expect(newState.activeMaxValue).toBe(false)
})

test('Change min value', ()=>{
    let newValue = '4'
    let newState = counterReducer(initState, actionsCreators.ChangeStartValue(+newValue))

    newState.startValue &&
    expect(newState.startValue).toBe(4)
    expect(newState.activeMinValue).toBe(true)
})

test('Change min value with status', ()=>{

    let newValue = '4'
    let newState = counterReducer(initState, actionsCreators.ChangeStartValueWithStatus(+newValue, false))

    newState.startValue &&
    expect(newState.startValue).toBe(4)
    expect(newState.activeMinValue).toBe(false)
})
test('Change max value', ()=>{

    let newValue = '4'
    let newState = counterReducer(initState, actionsCreators.ChangeMaxValue(+newValue))

    newState.startValue &&
    expect(newState.maximumValue).toBe(4)
    expect(newState.activeMinValue).toBe(true)
})

test('Change max value with status', ()=>{

    let newValue = '22'
    let newState = counterReducer(initState, actionsCreators.ChangeMaxValueWithStatus(+newValue, false))

    newState.maximumValue &&
    expect(newState.maximumValue).toBe(22)
    expect(newState.activeMaxValue).toBe(false)
})

test('Change active status of MIN value', ()=>{

    let newState = counterReducer(initState, actionsCreators.ChangeActiveStatusMin(false))

    expect(newState.activeMinValue).toBe(false)
})

test('Change active status of MAX value', ()=>{

    let newState = counterReducer(initState, actionsCreators.ChangeActiveStatusMax(false))

    expect(newState.activeMaxValue).toBe(false)
})