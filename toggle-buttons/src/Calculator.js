import { useEffect, useReducer } from 'react';
import { calcReducer, initialState } from './calculator/calcReducer';
import { 
  addNewInput, 
  deleteLastInput, 
  eraseMemory, 
  modifyUserInputs, 
  resetCalculator, 
  saveOperator, 
  solveAndMemoriseResult 
} from './calculator/calcActions';

import './Calculator.css';

function Calculator() {

  const [state, dispatch] = useReducer(calcReducer, initialState);
  const {userInputFloat, operator, memory, userInputFormattedString} = state;

  useEffect(() => {
    if(memory && !operator && userInputFloat>0)
      dispatch(eraseMemory())
  }, [memory, operator, userInputFloat]);

  const inputs = ['0','1','2','3','4','5','6','7','8','9','.'];
  const operators = ['+', '-', '*', '/', '×','÷'];
  const reseters = ['Delete', 'C'];
  const erasers = ['Backspace', '⌫'];
  const modifiers = ['%', '±'];
  const exits = ['=', 'Enter'];

  const layout = [
    '⌫','C','%','÷',
    '7','8','9','×',
    '4','5','6','-',
    '1','2','3','+',
    '±','0','.','=',
  ];

  const buttonsIds = [
    'Backspace','Delete','%','/',
    '7','8','9','*',
    '4','5','6','-',
    '1','2','3','+',
    '±','0','.','Enter',
  ];

  const handleInputKey = (key) => {

    switch (true) {
      case (inputs.includes(key)):
        return dispatch(addNewInput(key));

      case (erasers.includes(key)):
        return dispatch(deleteLastInput());

      case (modifiers.includes(key)):
        return dispatch(modifyUserInputs(key));

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

  const handleMouseMove = ({clientX, clientY}) => {
    console.log('clientX:', clientX)
    console.log('clientY:',clientY)
  } 

  return (
    <div
      tabIndex={0}
      className="Calculator"
      onMouseDown={ null }
      onMouseUp={ null }
      onMouseMove={ handleMouseMove }
      onKeyDown={ handlePressKey }
      onKeyUp={ handleReleaseKey }
    >
      <div className="screen">
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
      <div className="buttons">
        {
          layout.map((button, i)=>(
            <button
              className="button"
              key={ i }
              id={ buttonsIds[i] }
              onMouseDown={ handlePressButton }
              onMouseUp={ handleReleaseButton }
            >
              { button }
            </button>
          ))
        }
      </div>   
    </div>
  );
}

export default Calculator;
