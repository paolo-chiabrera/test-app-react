import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import CounterButtons from './CounterButtons';

describe('CounterButtons', () => {
  const increaseCounterStub = jest.fn();
  const decreaseCounterStub = jest.fn();
  const resetCounterStub = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('calls increaseCounter when the relative button is clicked', () => {
    const { getByText } = render(
      <CounterButtons increaseCounter={increaseCounterStub} />
    );

    const button = getByText('Increase counter');

    fireEvent.click(button);

    expect(increaseCounterStub).toHaveBeenCalled();
  });

  it('calls decreaseCounter when the relative button is clicked', () => {
    const { getByText } = render(
      <CounterButtons decreaseCounter={decreaseCounterStub} />
    );

    const button = getByText('Decrease counter');

    fireEvent.click(button);

    expect(decreaseCounterStub).toHaveBeenCalled();
  });

  it('calls resetCounter when the relative button is clicked', () => {
    const { getByText } = render(
      <CounterButtons resetCounter={resetCounterStub} />
    );

    const button = getByText('Reset');

    fireEvent.click(button);

    expect(resetCounterStub).toHaveBeenCalled();
  });
});
