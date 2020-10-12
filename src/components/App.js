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
      console.log(calculate(this.state, buttonName));
      const result = calculate(this.state, buttonName);
      this.setState(result);
    };
  }

  render() {
    const { next } = this.state;
    return (
      <div className="App">
        <Display displayValue={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
