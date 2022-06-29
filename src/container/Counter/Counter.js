import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { incrementCounter ,decrementCounter } from "../../redux/action/Counter.Action"

function Counter(props) {
    const C = useSelector (Counter)
    const dispatch = useDispatch()
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  return (
    <div>
      <button onClick={() => handleIncrement()}>Increment</button>
      <p>{C.counter}</p>
      <button onClick={() => handleDecrement()}>Decrement</button>
    </div>
  );
}

export default Counter;
