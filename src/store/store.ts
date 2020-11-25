import {combineReducers, createStore, Store} from "redux";
import {counterReducer} from "./counerReducer";

let reducers = combineReducers({
    counter: counterReducer
})
export type AllStateType = ReturnType<typeof reducers>
export const store: Store = createStore(reducers)

type AppStoreType = ReturnType<typeof reducers>


// @ts-ignore
window.store = store