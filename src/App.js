import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Anime from 'react-anime';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };


    setInterval(this.incrementCounter);
  }

  incrementCounter = () =>
    this.setState(({ counter }) => ({ counter: counter++ }));

  render() {
    return (
      <Anime translateX={[0, 25 * (4 % this.state.counter)]}>
        <div style={styles.circle} />
      </Anime>
    );
  }
}

const styles = {
  circle: {
    width: 64,
    height: 64,
    borderRadius: '100%',
    background: 'steelblue',
  },
};

export default App