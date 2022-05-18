import { types } from "./calcTypes";
import { 
  addValidKeyToInputs, 
  calculate, 
  modifyInputs, 
  removeLastKeyFromInputs
} from "./calcHelpers";

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
    case(types.modifyUserInputs):
      
      // console.log(action.payload)
      return {
        ...state,
        ...modifyInputs( state.userInputString, action.payload, state.memory )
      };
    default:
      return state;
  }
}