import React, { Component } from 'react';

import css from './input.module.css';

export default class InputTax extends Component {
    render() {
        const { value, percent } = this.props;
        let show = '';
        if (percent === undefined || isNaN(percent)) {
          console.log(typeof (percent));
          show = '';
        } else {
          show = ` - ${Math.round(percent)}%`;
        }
        return (
          <input readOnly placeholder={Math.round(value) + show} />
        )
      }
}
