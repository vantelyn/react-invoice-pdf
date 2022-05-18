import { 
  addValidKeyToInputs, 
  calculate, 
  removeLastKeyFromInputs
} from "./calcHelpers";
import { types } from "./types";

export const initialState = {
  memory: undefined,
  operator: undefined,
  userInputFloat: 0,
  userInputString: '0',
  userInputFormattedString:'0'
}

export const calcReducer = ( state, action ) => {
  switch (action.type) {
    case(types.addNewInput):
      return{
        ...state,
        ...addValidKeyToInputs( action.payload, state.userInputString )
      }
    case(types.deleteLastInput):
      return{
        ...state,
        ...removeLastKeyFromInputs( state.userInputString )
      }
    case(types.resetCalculator):
      return initialState;

    case(types.solveAndMemoriseResult):
      const result = calculate(state.memory, state.operator, state.userInputFloat);
      return {
        ...initialState,
        memory: result
      };

    case(types.saveOperator):
      return {
        ...state,
        operator: action.payload
      };
    case(types.eraseMemory):
      return {
        ...state,
        memory: undefined
      };
    default:
      return state;
  }
}