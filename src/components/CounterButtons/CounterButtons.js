import React from 'react';
import { withButtonAlignment } from 'bpk-component-icon';
import PlusIcon from 'bpk-component-icon/sm/plus';
import MinusIcon from 'bpk-component-icon/sm/minus';
import BpkButton from 'bpk-component-button';

const AlignedPlusIcon = withButtonAlignment(PlusIcon);
const AlignedMinusIcon = withButtonAlignment(MinusIcon);

import STYLES from './CounterButtons.scss';

const CounterButtons = ({ decreaseCounter, increaseCounter, resetCounter }) => (
  <div className={STYLES['CounterButtons__container']}>
    <BpkButton
      aria-label="Increase counter"
      className={STYLES['CounterButtons__btn']}
      iconOnly
      id="plus-btn"
      onClick={() => increaseCounter()}
    >
      <AlignedPlusIcon />
      <span className={STYLES['CounterButtons__visually-hidden']}>
        Increase counter
      </span>
    </BpkButton>
    <BpkButton
      aria-label="Decrease counter"
      className={STYLES['CounterButtons__btn']}
      iconOnly
      id="minus-btn"
      onClick={() => decreaseCounter()}
    >
      <AlignedMinusIcon />
      <span className={STYLES['CounterButtons__visually-hidden']}>
        Decrease counter
      </span>
    </BpkButton>
    <BpkButton
      aria-label="Reset"
      className={STYLES['CounterButtons__btn']}
      id="reset-btn"
      onClick={() => resetCounter()}
    >
      Reset
    </BpkButton>
  </div>
);

export default CounterButtons;
