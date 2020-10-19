import {
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  RESET_COUNTER,
} from '../../actions/counter/types';

import counter, { initialState } from './counter';

describe('counter reducer', () => {
  it('should return the default state', () => {
    const state = counter(undefined, {});

    expect(state).toEqual(initialState);
  });

  it('should return the expected state after DECREASE_COUNTER action', () => {
    const state = counter(undefined, { type: DECREASE_COUNTER });

    expect(state).toEqual({
      value: -1,
    });
  });

  it('should return the expected state after INCREASE_COUNTER action', () => {
    const state = counter(undefined, { type: INCREASE_COUNTER });

    expect(state).toEqual({
      value: 1,
    });
  });

  it('should return the expected state after RESET_COUNTER action', () => {
    const state = counter(undefined, { type: RESET_COUNTER });

    expect(state).toEqual({
      value: 0,
    });
  });
});
