import React from 'react'

export default function DecrementButton (props)  {
    const handleButton = ()=>{
        props.onDecrement('-');
    }

        return (
            <button onClick={handleButton} className="waves-effect waves-light btn red darken-4">-</button>

        );
    }

