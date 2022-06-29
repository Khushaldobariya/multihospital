import * as ActionTypes from "../ActionType";

export const incrementCounter = () => (dispatch) => {
  dispatch(ActionTypes.INCREMENT_COUNTER);
};
export const decrementCounter = () => (dispatch) => {
  dispatch(ActionTypes.DECREMENT_COUNTER);
};
