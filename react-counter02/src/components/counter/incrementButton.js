import React, { Component } from 'react'

export default class IncrementButton extends Component {
    handleButton = ()=>{
        this.props.onIncrement('+');
    }

    render() {
        return (
            <button onClick={this.handleButton} className="waves-effect waves-light btn green darken-4">+</button>

        );
    }
}
