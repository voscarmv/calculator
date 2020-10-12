import Big from 'big.js';

const operate = ({ total, next, operation }) => {
  const tot = Big(total);
  let output = 0;
  switch (operation) {
    case '+':
      output = tot.plus(next);
      break;
    case '-':
      output = tot.minus(next);
      break;
    case 'X':
      output = tot.times(next);
      break;
    case '÷':
      output = tot.div(next);
      break;
    case '%':
      output = tot.div(next).times(100);
      break;
    default:
  }
  return output.toString();
};

export default operate;
