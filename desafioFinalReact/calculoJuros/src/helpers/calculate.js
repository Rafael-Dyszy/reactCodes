function calculateInterest(value, juros, mes) {
  let array = [];

  let newValue = value;
  let newValueInterest = newValue * (1 + juros / 100) - newValue;

  let newAcumulateMonthly = (newValueInterest / newValue) * 100;

  let count = 1;

  for (let index = 1; index <= mes; index++) {
    const valueInterest = value * Math.pow(1 + juros / 100, index).toFixed(7);

    newValueInterest = (valueInterest - value).toFixed(2);
    newAcumulateMonthly = newValueInterest / value;

    const valueFinal = {
      count,
      valueInterest: (valueInterest + 0).toFixed(2),
      newValueInterest,
      newAcumulateMonthly: (newAcumulateMonthly * 100).toFixed(2),
    };

    array.push(valueFinal);
    count++;
  }
  return array;
}

export { calculateInterest };
