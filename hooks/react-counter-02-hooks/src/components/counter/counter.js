/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

import css from './counter.module.css';
import IncrementButton from './incrementButton';
import DecrementButton from './decrementButton';
import Value from './value';
import Steps from './steps';

export default function counter () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentCounter, setCurrentCounter] = useState(2);
    const [steps, setSteps] = useState(0);
    

    const handleButton = (clickType) => {

        const Counter = clickType === '+' ? currentCounter + 1 : currentCounter - 1;
        
        setCurrentCounter(Counter);
        setSteps(steps + 1);
        
    };

        return (
            <div className={css.counterContainer}>
                <DecrementButton onDecrement={handleButton}/>
                <Value value={currentCounter}/>
                <IncrementButton onIncrement={handleButton}/>
                <Steps steps={steps}/>
            </div>
        )
    }

