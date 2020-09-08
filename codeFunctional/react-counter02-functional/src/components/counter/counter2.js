import React from 'react'

import css from './counter.module.css';
import IncrementButton from './incrementButton';
import DecrementButton from './decrementButton';
import Value from './value';
import Steps from './steps';

export  function Counter2 (props) {
    const handleButton = (clickType) => {
        props.onCount(clickType);
    };    

        const {countValue, steps} = props;

        return (
            <div className={css.counterContainer}>
                <DecrementButton onDecrement={handleButton}/>
                <Value value={countValue}/>
                <IncrementButton onIncrement={handleButton}/>
                <Steps steps={steps}/>
            </div>
        );
    }

