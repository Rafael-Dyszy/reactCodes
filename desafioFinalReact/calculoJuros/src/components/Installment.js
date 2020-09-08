import React from 'react';
import Installments from './Installments';

import css from './boxes.module.css';

import { calculateInterest } from '../helpers/calculate';
import { useState, useEffect } from 'react';

export default function Installment({ value, juros, mes }) {
  const [valueInstallments, setValueInstallments] = useState([]);

  useEffect(() => {
    const newArray = calculateInterest(value, juros, mes);

    setValueInstallments([...newArray]);
  }, [value, juros, mes]);

  return (
    <div className={css.boxes}>
      {valueInstallments.map((value, index) => {
        const { valueInterest, newValueInterest, newAcumulateMonthly } = value;

        return (
          <div key={index}>
            <Installments
              index={index + 1}
              valueInterest={valueInterest}
              newValueInterest={newValueInterest}
              newAcumulateMonthly={newAcumulateMonthly}
            />
          </div>
        );
      })}
    </div>
  );
}
