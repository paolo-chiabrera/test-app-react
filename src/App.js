import React from 'react';
import BpkText from 'bpk-component-text';

import CounterButtons from './components/CounterButtons';
import CounterDisplay from './components/CounterDisplay';

import STYLES from './App.scss';

const App = () => (
  <div className={STYLES['App']}>
    <header className={STYLES['App__header']}>
      <div className={STYLES['App__header-inner']}>
        <BpkText
          tagName="h1"
          textStyle="xxl"
          className={STYLES['App__heading']}
        >
          Simple counter app
        </BpkText>
      </div>
    </header>
    <main className={STYLES['App__main']}>
      <CounterDisplay />
      <CounterButtons />
    </main>
  </div>
);

export default App;
