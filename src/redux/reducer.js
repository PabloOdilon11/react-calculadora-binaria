const initialState = {
    num: 0,
    oldNum: 0,
    operator: null,
  };
  
  const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INPUT_NUMBER':
        // Concatenar número ou resetar para o novo valor se num for 0
        return {
          ...state,
          num: state.num === 0 ? action.payload : state.num + action.payload,
        };
  
      case 'CLEAR':
        // Reseta todos os valores
        return initialState;
  
      case 'CHANGE_SIGN':
        // Troca o sinal do número
        return {
          ...state,
          num: state.num > 0 ? -state.num : Math.abs(state.num),
        };
  
      case 'SET_OPERATOR':
        // Define o operador e salva o número atual como oldNum
        return {
          ...state,
          operator: action.payload,
          oldNum: state.num,
          num: 0,
        };
  
      case 'CALCULATE':
        // Realiza o cálculo com base no operador
        let result;
        switch (state.operator) {
          case '+':
            result = parseFloat(state.oldNum) + parseFloat(state.num);
            break;
          case '-':
            result = parseFloat(state.oldNum) - parseFloat(state.num);
            break;
          case 'X':
            result = parseFloat(state.oldNum) * parseFloat(state.num);
            break;
          case '/':
            result = parseFloat(state.oldNum) / parseFloat(state.num);
            break;
          default:
            return state;
        }
        return {
          ...state,
          num: result,
          operator: null,
          oldNum: 0,
        };
  
      default:
        return state;
    }
  };
  
  export default calculatorReducer;
  