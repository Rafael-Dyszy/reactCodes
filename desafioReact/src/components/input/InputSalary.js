import React, {Component} from 'react';

import css from './input.module.css';

export default class InputSalary extends Component {
    render() {
      const { onChange, salary } = this.props;
      return (
        <input onChange={onChange} type="number" className="full" placeholder={salary} />
      )
    }
  }

