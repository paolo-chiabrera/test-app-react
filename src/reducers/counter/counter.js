import {
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  RESET_COUNTER,
} from '../../actions/counter/types';

export const initialState = {
  value: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case DECREASE_COUNTER:
      return {
        ...state,
        value: state.value - 1,
      };
    case INCREASE_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };
    case RESET_COUNTER:
      return {
        ...state,
        value: 0,
      };
    default:
      return state;
  }
};

export default counter;
