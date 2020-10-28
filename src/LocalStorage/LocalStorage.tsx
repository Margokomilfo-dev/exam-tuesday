// сохранение объектов в память браузера
// (данные в этом хранилище сохраняться даже при перезагрузке компа):
export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

// получение сохранённого объекта в памяти браузера:
export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}

type StateType = {
    min: number
    max: number
}


// получем в переменную state объект из ячейки "test" или дэфолтный объект если ячейка пуста
const state: StateType = restoreState<StateType>("start value", {min: 0, max: 0});
