import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const isDigit = char => char >= '0' && char <= '9';

  if (isDigit(buttonName)) {
    return { total, next: `${next}${buttonName}`, operation };
  }

  switch (buttonName) {
    case '+/-':
      return { total: -1 * total, next: -1 * next, operation };
    case 'AC':
      return { total: 0, next: 0, operation: null };
    case '.':
      return { total, next: next.split('.').length > 1 ? next : `${next || '0'}.`, operation };
    case '=':
      return { total: 0, next: operate({ total, next, operation }), operation: null };
    default:
      return { total: next, next: '', operation: buttonName };
  }
};

export default calculate;
