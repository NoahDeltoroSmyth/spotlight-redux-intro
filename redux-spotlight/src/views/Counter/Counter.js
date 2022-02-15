import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, doubleIncrement } from './counterSlice';

const Counter = () => {
  // The function below is called a selector and allows us to select
  // a value from
  // the state.
  const count = useSelector((state) => state.counter.count);
  const color = useSelector((state) => state.counter.color);
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: color }}>
      <button
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button onClick={() => dispatch(doubleIncrement())}>Double</button>
    </div>
  );
};

export default Counter;
