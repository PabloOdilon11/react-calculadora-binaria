export const inputNum = (value) => ({
    type: 'INPUT_NUMBER',
    payload: value,
  });
  
  export const clear = () => ({
    type: 'CLEAR',
  });
  
  export const changeSign = () => ({
    type: 'CHANGE_SIGN',
  });
  
  export const setOperator = (operator) => ({
    type: 'SET_OPERATOR',
    payload: operator,
  });
  
  export const calculate = () => ({
    type: 'CALCULATE',
  });
  