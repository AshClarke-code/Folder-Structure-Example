import CounterActionTypes from "./counter.types";

export const incrementCount = () => ({
  type: CounterActionTypes.INCREMENT
});

export const decrementCount = () => ({
  type: CounterActionTypes.DECREMENT
});