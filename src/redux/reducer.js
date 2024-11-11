const initialState = {
  num: 0,
  oldNum: 0,
  operator: null,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_NUMBER':
      return {
        ...state,
        num: state.num === 0 ? action.payload : state.num + action.payload,
      };

    case 'CLEAR':
      return initialState;

    case 'CHANGE_SIGN':
      return {
        ...state,
        num: state.num > 0 ? -state.num : Math.abs(state.num),
      };

    case 'SET_OPERATOR':
      return {
        ...state,
        operator: action.payload,
        oldNum: state.num,
        num: 0,
      };

    case 'CALCULATE':
      let result;
      switch (state.operator) {
        case '+':
          result = parseFloat(state.oldNum) + parseFloat(state.num);
          break;
        case '-':
          result = parseFloat(state.oldNum) - parseFloat(state.num);
          break;
        case '*':
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
