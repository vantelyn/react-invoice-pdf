import { types } from "./calcTypes";
import { 
  addValidKeyToInputs, 
  calculate, 
  modifyInputs, 
  removeLastKeyFromInputs
} from "./calcHelpers";

export const initialState = {
  result: 0,
  memory: undefined,
  operator: undefined,
  userInputFloat: undefined,
  userInputString: '',
  userInputFormattedString:''
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
      return {
        ...state,
        result: calculate(state.memory, state.operator, (state.userInputFloat || state.result)),
        userInputFloat: undefined,
        userInputString: '',
        userInputFormattedString:'',
        memory: calculate(state.memory, state.operator, (state.userInputFloat || state.result))
      };
      
    case(types.solveAndMemoriseResult2):
      return {
        ...state,
        result: calculate(state.memory, state.operator, (state.userInputFloat || state.result)),
        userInputFloat: undefined,
        userInputString: '',
        userInputFormattedString:''
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