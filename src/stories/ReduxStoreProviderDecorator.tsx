import React from 'react'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux';
import {counterReducer} from "../store/counerReducer";
import { AllStateType } from "../store/store";


let rootReducer = combineReducers({
    counter: counterReducer
})

const initialGlobalState = {
    counter: {
        value: 0,
        activeMinValue: true,
        activeMaxValue: true,
        startValue:  0,
        maximumValue: 1,
    }
};

export const storyBookStore = createStore(rootReducer, initialGlobalState as AllStateType);

export const ReduxStoreProviderDecorator = (StoryFn: React.FC) => {
    return (
        <Provider store={storyBookStore}>
            <StoryFn/>
        </Provider>
    )
}