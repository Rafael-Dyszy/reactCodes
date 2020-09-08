import React, { useState } from 'react';

import css from './form.module.css';
import Installment from './Installment';

export default function Form() {
  const [value, setValue] = useState(1000);
  const [juros, setJuros] = useState(1);
  const [mes, setMes] = useState(1);

  const handleChangeValue = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const handleChangeJuros = (event) => {
    const newJuros = event.target.value;
    setJuros(newJuros);
  };

  const handleChangeParcelas = (event) => {
    const newParcelas = event.target.value;
    setMes(newParcelas);
  };

  return (
    <div className={css.flexRow}>
      <form className={css.form}>
        <div>
          <label htmlFor="inputName" className="active">
            Montante:
          </label>
          <input
            type="number"
            id="inputValue"
            value={value}
            onChange={handleChangeValue}
            min={0}
            max="100000"
            step="100"
            autoFocus
          />
        </div>

        <div>
          <label htmlFor="inputJuros" className="active">
            Juros
          </label>
          <input
            type="number"
            id="inputJuros"
            min="-12"
            max="12"
            step="0.1"
            value={juros}
            onChange={handleChangeJuros}
            placeholder="%"
          />
        </div>

        <div>
          <label htmlFor="inputParcelas" className="active">
            Parcelas:
          </label>
          <input
            type="number"
            id="inputParcelas"
            min="1"
            max="36"
            step="1"
            onChange={handleChangeParcelas}
            value={mes}
          />
        </div>
      </form>
      <Installment value={value} juros={juros} mes={mes} />
    </div>
  );
}
