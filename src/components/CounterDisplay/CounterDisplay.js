import React from 'react';
import BpkText from 'bpk-component-text';
import isNumber from 'lodash/isNumber';

const CounterDisplay = ({ counterValue }) => (
  <div>
    <BpkText tagName="h2" textStyle="xl">
      Count: {isNumber(counterValue) ? counterValue : '?'}
    </BpkText>
  </div>
);

export default CounterDisplay;
