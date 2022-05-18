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

export const solveAndMemoriseResult = () => ({
  type: types.solveAndMemoriseResult
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