import React, { Component } from 'react';

import Counter from './components/counter/counter'

export default class App extends Component {
  render() {
    return(
    <div>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
    );
  }
}
