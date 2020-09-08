import React, { Component } from 'react'

import css from './counter.module.css';
import IncrementButton from './incrementButton';
import DecrementButton from './decrementButton';
import Value from './value';
import Steps from './steps';

export default class Counter2 extends Component {
    handleButton = (clickType) => {
        this.props.onCount(clickType);
    };    

    render() {
        const {countValue, steps} = this.props;
        return (
            <div className={css.counterContainer}>
                <DecrementButton onDecrement={this.handleButton}/>
                <Value value={countValue}/>
                <IncrementButton onIncrement={this.handleButton}/>
                <Steps steps={steps}/>
            </div>
        )
    }
}
