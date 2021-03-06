import React, { Component } from 'react';

import Counter from './components/counter/counter'
import {Counter2} from './components/counter/counter2';
import Band from './components/band';
 
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      currentCounter: 3,
      steps: 0,
    }
  }
  handleCount = (clickType) => {
    const {currentCounter, steps} = this.state;

        this.setState({
           currentCounter: clickType === '+' ? currentCounter + 1 : currentCounter - 1,
            steps: steps + 1,
        });
  }
  render() {
    const {currentCounter, steps} = this.state;
    return(
    <>
      <h3>Band</h3>
      <Band/>
      <h3>Counter</h3>
      <Counter/>
      <Counter/>
      <Counter/>

      <h3>Counter 2</h3>
      <Counter2 onCount={this.handleCount} countValue={currentCounter} steps={steps}/>
      <Counter2 onCount={this.handleCount} countValue={currentCounter} steps={steps}/>
      <Counter2 onCount={this.handleCount} countValue={currentCounter} steps={steps}/>
    </>
    );
  }
}
