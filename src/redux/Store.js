import { createStore } from 'redux'

export const  ConfigureStore = () => {
    let store = createStore(rootReducer)

    return store;
}