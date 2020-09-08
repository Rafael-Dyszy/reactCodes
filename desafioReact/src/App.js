import React, { Component } from 'react';
import InputSalary from './components/input/InputSalary';
import InputTax from './components/input/InputTax';
import {calculateSalaryFrom} from './salary';
import css from './style.module.css';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      fullSalary: 1000,
    }
  }

  handleChangeSalary = (event) => {
    const value = event.target.value;
    this.setState({
      fullSalary: value
      
    });
  }
  

  render() {
    const { baseINSS, baseIRPF, discountINSS, netSalary, discountIRPF } = calculateSalaryFrom(this.state.fullSalary);
    const percentINSS = (discountINSS * 100) / baseINSS;
    const percentIRPF = (discountIRPF * 100) / baseINSS;
    const percentNet = 100 - percentINSS - percentIRPF;
    return (
      <div className="container">
        <h1>Calculo de salario</h1>
        <span>Salario Bruto: </span>
          <InputSalary onChange={this.handleChangeSalary} salary={this.state.fullSalary}/>
          <div className={css.flexDirection}>
            <div className={css.baseInss}>
              <span>Base INSS:</span>
              <InputTax value={baseINSS}/>
            </div>
            <div className={css.baseIrpf}>
              <span>Base IRPF:</span>
              <InputTax value={baseIRPF} percent={percentIRPF}/>
            </div>
            <div className={css.descontoInss}>
              <span>Descontos INSS:</span>
              <InputTax value={discountINSS} percent={percentINSS}/>
            </div>
            <div className={css.descontoIrpf}>
              <span>Descontos IRPF:</span>
              <InputTax value={discountIRPF} percent={percentIRPF}/>
            </div>
          </div>
          <span>Salario LIquido: </span>
          <InputTax className={css.salarioLiquido} value={netSalary} percent={percentNet}/>

      </div>
    );
  }
}
