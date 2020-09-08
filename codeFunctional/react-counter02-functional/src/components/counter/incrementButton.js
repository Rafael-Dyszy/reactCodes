import React  from 'react'

export default function IncrementButton (props)  {
    const handleButton = ()=>{
        props.onIncrement('+');
    }

        return (
            <button onClick={handleButton} className="waves-effect waves-light btn green darken-4">+</button>

        );
    }

