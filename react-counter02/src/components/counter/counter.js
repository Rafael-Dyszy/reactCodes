import React, { Component } from 'react'

import css from './counter.module.css';
import IncrementButton from './incrementButton';
import DecrementButton from './decrementButton';
import Value from './value';
import Steps from './steps';

export default class counter extends Component {
    constructor(){
        super();

        this.state = {
            currentCounter: 2,
            steps: 0,
        }
    }

    

    handleButton = (clickType) => {
        const {currentCounter, steps} = this.state;

        this.setState({
           currentCounter: clickType === '+' ? currentCounter + 1 : currentCounter - 1,
            steps: steps + 1,
        });
    };

    render() {
        const {currentCounter, steps} = this.state;

        return (
            <div className={css.counterContainer}>
                <DecrementButton onDecrement={this.handleButton}/>
                <Value value={currentCounter}/>
                <IncrementButton onIncrement={this.handleButton}/>
                <Steps steps={steps}/>
            </div>
        )
    }
}
