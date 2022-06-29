import { createStore ,applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducer';

export const  ConfigureStore = () => {
    let store = createStore(rootReducer ,applyMiddleware(thunk))

    return store;
}