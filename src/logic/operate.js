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
      if (Big(next).eq(0)) {
        output = "Error: don't divide by 0";
      } else {
        output = tot.div(next);
      }
      break;
    case '%':
      output = tot.times(0.01);
      break;
    default:
  }
  return output.toString();
};

export default operate;
