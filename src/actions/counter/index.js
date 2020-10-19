import { DECREASE_COUNTER, INCREASE_COUNTER, RESET_COUNTER } from './types';

const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
});

const increaseCounter = () => ({
  type: INCREASE_COUNTER,
});

const resetCounter = () => ({
  type: RESET_COUNTER,
});

export { decreaseCounter, increaseCounter, resetCounter };
