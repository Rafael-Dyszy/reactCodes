import React, { Component } from 'react'

export default class DecrementButton extends Component {
    handleButton = ()=>{
        this.props.onDecrement('-');
    }

    render() {
        return (
            <button onClick={this.handleButton} className="waves-effect waves-light btn red darken-4">-</button>

        );
    }
}
