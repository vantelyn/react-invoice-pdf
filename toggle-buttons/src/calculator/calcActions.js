import { types } from "./calcTypes";

export const addNewInput = ( key ) => ({
  type: types.addNewInput,
  payload: key
})

export const resetCalculator = () => ({
  type: types.resetCalculator
})

export const deleteLastInput = () => ({
  type: types.deleteLastInput
})

export const solveCurrentCalculationAndSaveOperator = (operator) => ({
  type: types.solveCurrentCalculationAndSaveOperator,
  payload: operator
})

export const solveAndMemoriseResult = () => ({
  type: types.solveAndMemoriseResult
})

export const solveAndMemoriseResult2 = () => ({
  type: types.solveAndMemoriseResult2
})

export const eraseMemory = () => ({
  type: types.eraseMemory
})

export const saveOperator = ( operator ) => ({
  type: types.saveOperator,
  payload: operator
})

export const modifyUserInputs = ( key ) => ({
  type: types.modifyUserInputs,
  payload: key
})