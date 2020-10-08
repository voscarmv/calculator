const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  switch (buttonName) {
    case '+/-':
      return { total: -1 * total, next: -1 * next, operation };
    default:
      return null;
  }
};

export default calculate;
