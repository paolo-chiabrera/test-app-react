import React from 'react';
import { render } from '@testing-library/react';

import ConterDisplay from './CounterDisplay';

describe('CounterDisplay', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ConterDisplay counterValue={1} />);

    expect(getByText('Count: 1')).toBeTruthy();
  });

  it('renders correctly when no counterValue is passed', () => {
    const { getByText } = render(<ConterDisplay />);

    expect(getByText('Count: ?')).toBeTruthy();
  });
});
