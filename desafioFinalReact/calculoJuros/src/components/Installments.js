import React from 'react';

import css from './boxInstallments.module.css';

export default function Installments({
  index,
  valueInterest,
  newValueInterest,
  newAcumulateMonthly,
}) {
  return (
    <div className={css.box}>
      <div className={css.index}>{index}</div>
      <div className={css.total}>
        <span>R$: {valueInterest}</span>
        <span>R$: {newValueInterest}</span>
        <span>{newAcumulateMonthly}%</span>
      </div>
    </div>
  );
}
