import { calcReducer, initialState } from './calculator/calcReducer';
import { useEffect, useReducer } from 'react';
import { 
  addNewInput, 
  deleteLastInput, 
  eraseMemory, 
  resetCalculator, 
  saveOperator, 
  solveAndMemoriseResult 
} from './calculator/calcActions';

import './Calculator.css';

function Calculator() {

  const [{userInputFloat, operator, memory, userInputFormattedString}, dispatch] = useReducer(calcReducer, initialState);

  useEffect(() => {
    if(memory && !operator && userInputFloat>0)
      dispatch(eraseMemory())
  }, [memory, operator, userInputFloat]);

  const inputs = ['0','1','2','3','4','5','6','7','8','9','.'];
  const operators = ['+', '-', '*', '/'];
  const reseters = ['Delete'];
  const erasers = ['Backspace'];
  const modifiers = ['%', '	±'];
  const exits = ['=', 'Enter'];

  const buttons = [
    ...inputs,
    ...operators,
    ...modifiers,
    ...erasers,
    ...reseters,
    ...exits,
  ];

  const handleInputKey = (key) => {

    switch (true) {
      case (inputs.includes(key)):
        return dispatch(addNewInput(key));

      case (erasers.includes(key)):
        return dispatch(deleteLastInput());

      case (reseters.includes(key)):
        return dispatch(resetCalculator());

      case (exits.includes(key)):
        return dispatch(solveAndMemoriseResult());

      case (operators.includes(key)):
        dispatch(solveAndMemoriseResult());
        dispatch(saveOperator(key));
        return;

      default:
        break;
    }
  }

  const handlePressButton = (event) => {
    event.target.classList.add('pressed');
    const key = event.target.id;
    handleInputKey(key);
  };

  const handleReleaseButton = (event) => {
    event.target.classList.remove('pressed');
  };

  const handlePressKey = ({key}) => {
    if(document.getElementById(key))
      document.getElementById(key).classList.add('pressed');
    handleInputKey(key);
  }

  const handleReleaseKey = ({key}) => {
    if(document.getElementById(key))
      document.getElementById(key).classList.remove('pressed');
  }

  return (
    <div
      tabIndex={0}
      className="Calculator"
      onKeyDown={ handlePressKey }
      onKeyUp={ handleReleaseKey }
    >
      {
        buttons.map((button, i)=>(
          <button
            className="button"
            key={ i }
            id={ button }
            onMouseDown={ handlePressButton }
            onMouseUp={ handleReleaseButton }
          >
            { button }
          </button>
        ))
      }
      <input 
        className='mod__input'
        disabled
        value={ memory===undefined ? '' : memory }
      />
      <input 
        className='mod__input'
        disabled
        value={ operator===undefined ? '' : operator }
      />
      <input 
        className='mod__input'
        disabled
        value={ userInputFormattedString }
      />
    </div>
  );
}

export default Calculator;
