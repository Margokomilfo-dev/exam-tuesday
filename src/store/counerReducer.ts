import {useDispatch as _useDispatch} from "react-redux";

export enum ACTIONS_TYPE{
    SETTING = 'SETTING',
    INCREMENTAL= 'INCREMENTAL',
    RESET = 'RESET',
    CHANGE_START_VALUE = 'CHANGE_START_VALUE',
    CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE',
    CHANGE_START_VALUE_WITH_STATUS = 'CHANGE_START_VALUE_WITH_STATUS',
    CHANGE_MAX_VALUE_WITH_STATUS = 'CHANGE_MAX_VALUE_WITH_STATUS',
    CHANGE_ACTIVE_STATUS_MIN = 'CHANGE_ACTIVE_STATUS_MIN',
    CHANGE_ACTIVE_STATUS_MAX = 'CHANGE_ACTIVE_STATUS_MAX',
}

let initState = {
    value: 0,
    activeMinValue: true,
    activeMaxValue: true,
    startValue:  0,
    maximumValue: 1,
}

export type InitStateType = typeof initState
type ActionsType =
    | ReturnType<typeof actionsCreators.SettingAC>
    | ReturnType<typeof actionsCreators.IncrementalAC>
    | ReturnType<typeof actionsCreators.ResetAC>
    | ReturnType<typeof actionsCreators.ChangeMaxValue>
    | ReturnType<typeof actionsCreators.ChangeStartValue>
    | ReturnType<typeof actionsCreators.ChangeMaxValueWithStatus>
    | ReturnType<typeof actionsCreators.ChangeStartValueWithStatus>
    | ReturnType<typeof actionsCreators.ChangeActiveStatusMin>
    | ReturnType<typeof actionsCreators.ChangeActiveStatusMax>


export const counterReducer = (state: InitStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case ACTIONS_TYPE.SETTING:
            let copyState = {...state}
            localStorage.setItem('max', copyState.maximumValue.toString());
            localStorage.setItem('min', copyState.startValue.toString());
            copyState.value = action.value
            copyState.activeMinValue = false
            copyState.activeMaxValue= false
            return copyState

        case ACTIONS_TYPE.INCREMENTAL:
            return {
                ...state,
                value: action.value + 1,
            }

        case ACTIONS_TYPE.RESET:
            return {
                ...state,
                value: 0,
            }

        case ACTIONS_TYPE.CHANGE_START_VALUE:
            return {
                ...state,
                startValue: action.value
            }

        case ACTIONS_TYPE.CHANGE_START_VALUE_WITH_STATUS:
            return {
                ...state,
                activeMinValue: action.status,
                startValue: action.value,
            }

        case ACTIONS_TYPE.CHANGE_MAX_VALUE:
            return {
                ...state,
                maximumValue: action.value
            }

        case ACTIONS_TYPE.CHANGE_MAX_VALUE_WITH_STATUS:
            return {
                ...state,
                activeMaxValue: action.status,
                maximumValue: action.value
            }

        case ACTIONS_TYPE.CHANGE_ACTIVE_STATUS_MIN:
            return {
                ...state,
                activeMinValue: action.status,
            }

         case ACTIONS_TYPE.CHANGE_ACTIVE_STATUS_MAX:
            return {
                ...state,
                activeMaxValue: action.status,
            }

        default:
            return state
    }
}

export const actionsCreators = {
    SettingAC: (value: number) => ({type: ACTIONS_TYPE.SETTING, value} as const),
    IncrementalAC: (value: number) => ({type: ACTIONS_TYPE.INCREMENTAL, value} as const),
    ResetAC: () => ({type: ACTIONS_TYPE.RESET} as const),
    ChangeMaxValue: (value: number) => ({type: ACTIONS_TYPE.CHANGE_MAX_VALUE, value } as const),
    ChangeMaxValueWithStatus: (value: number, status: boolean) => ({type: ACTIONS_TYPE.CHANGE_MAX_VALUE_WITH_STATUS, value, status } as const),
    ChangeStartValue: (value: number) => ({type: ACTIONS_TYPE.CHANGE_START_VALUE, value } as const),
    ChangeStartValueWithStatus: (value: number, status: boolean) => ({type: ACTIONS_TYPE.CHANGE_START_VALUE_WITH_STATUS, value, status } as const),
    ChangeActiveStatusMin: (status: boolean) => ({type: ACTIONS_TYPE.CHANGE_ACTIVE_STATUS_MIN, status} as const),
    ChangeActiveStatusMax: (status: boolean) => ({type: ACTIONS_TYPE.CHANGE_ACTIVE_STATUS_MAX, status} as const),
}

export function useDispatch() {
    const dispatch = _useDispatch()
    return (ac: ActionsType)=> dispatch(ac)
}