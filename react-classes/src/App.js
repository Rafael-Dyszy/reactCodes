import React, { Component } from 'react';
import ProjetoBase from './components/ProjetoBase/ProjetoBase';

import{getNewTimeStamp} from './helpers/dateTimeHelpers'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      clickArray: [],
    }
  }

  handleClick = () => {
    const newClickArray = Object.assign([], this.state.clickArray);
    newClickArray.push(getNewTimeStamp());

    this.setState({ clickArray: newClickArray})
  }

  componentDidUpdate(){
    document.title = this.state.clickArray.length.toString();
  }

  render() {
    const {clickArray} = this.state;
    return (
    <div>
      <h1>
        React e <em>Class Components</em>
      </h1>

      <button onClick={this.handleClick}>Clique Aqui</button>
      <ul>
        {clickArray.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
    );
  }
}
