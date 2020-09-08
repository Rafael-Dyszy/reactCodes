import React, { Fragment, useState } from 'react';

import Counter from './components/counter/counter'
import Counter2 from './components/counter/counter2';
import Band from './components/band';
 
export default function App() {

  const [currentCounter, setCurrentCounter] = useState(3);
  const [steps, setSteps] = useState(0);
 
  const handleCount = (clickType) => {
    const counter = clickType ==='+' ? currentCounter + 1 : currentCounter - 1;
    setCurrentCounter(counter);
    setSteps(steps + 1);
        
  }
    return(
    <Fragment>
      <h3>Band</h3>
      <Band/>
      <h3>Counter</h3>
      <Counter/>
      <Counter/>
      <Counter/>

      <h3>Counter 2</h3>
      <Counter2 onCount={handleCount} countValue={currentCounter} steps={steps}/>
      <Counter2 onCount={handleCount} countValue={currentCounter} steps={steps}/>
      <Counter2 onCount={handleCount} countValue={currentCounter} steps={steps}/>
    </Fragment>
    );
  }

