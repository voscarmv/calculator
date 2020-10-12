import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = buttonName => {
      const result = calculate(this.state, buttonName);
      this.setState(result);
    };
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="App">
        <Display total={total} next={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
