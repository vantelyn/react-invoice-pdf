import { 
  addValidKeyToInputs, 
  removeLastKeyFromInputs
} from "./calcHelpers";
import { types } from "./types";

export const initialState = {
  memory: null,
  operation: null,
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
    default:
      return state;
  }
}