import * as ACtionTypes from "actionTypes";
const initialState = {
  counter: 0,
};
export const CounterREducer = (state = initialState, action) => {
  switch (action.type) {
    case ACtionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
      case ACtionTypes.INCREMENT_COUNTER:
        return {
          ...state,
          counter: state.counter + 2,
        };
        default: 
        return state;
    }
  }

