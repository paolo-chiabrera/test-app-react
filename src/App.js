import React, { PureComponent } from 'react';
import axios from 'axios';
import BpkText from 'bpk-component-text';

import CounterButtons from './components/CounterButtons';
import CounterDisplay from './components/CounterDisplay';

import STYLES from './App.scss';

const API_URL = 'https://reqres.in/api/users/1';

class App extends PureComponent {
  state = {
    user: {},
  };

  componentDidMount() {
    axios
      .get(API_URL)
      .then(({ data }) => {
        this.setState({
          user: data.data,
        });
      })
      .catch(console.error);
  }

  render() {
    const { user } = this.state;

    return (
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
            {user.first_name && (
              <BpkText
                tagName="p"
                textStyle="lg"
                className={STYLES['App__heading']}
              >
                Welcome {user.first_name}
              </BpkText>
            )}
          </div>
        </header>
        <main className={STYLES['App__main']}>
          <CounterDisplay />
          <CounterButtons />
        </main>
      </div>
    );
  }
}

export default App;
