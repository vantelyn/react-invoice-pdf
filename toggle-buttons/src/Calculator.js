import { calcReducer, initialState } from './calculator/calcReducer';
import { useReducer } from 'react';
import './App.css';
import { addNewInput, deleteLastInput, resetCalculator, saveOperator } from './calculator/calcActions';

function Calculator() {

  const element = document.body;

  const [{operator, memory, userInputFormattedString}, dispatch] = useReducer(calcReducer, initialState);

  element.addEventListener("keydown", function({key}) {
    if(document.getElementById(key))
      document.getElementById(key).classList.add('pressed');
  });

  element.addEventListener("keyup", function({key}) {
    if(document.getElementById(key))
      document.getElementById(key).classList.remove('pressed');
  });


  const inputs = ['0','1','2','3','4','5','6','7','8','9','.'];
  const operators = ['+', '-', '*', '/'];
  const deleters = ['D'];
  const reseters = ['R'];
  // const modifiers = ['%', '	±'];
  // const exits = ['=', 'Enter'];

  const buttons = [
    ...inputs,
    ...operators,
    ...deleters,
    ...reseters
  ]

  const handlePressButton = (event) => {
    const key = event.target.id;
    element.dispatchEvent(new KeyboardEvent('keydown', {key}));
  }
  const handleReleaseButton = (event) => {
    const key = event.target.id;
    element.dispatchEvent(new KeyboardEvent('keyup', {key}));
  }

  const handleButtonClick = (event) => {
    const key = event.target.id;
    

    switch (true) {
      case (inputs.includes(key)):
        return dispatch(addNewInput(key));

      case (deleters.includes(key)):
        return dispatch(deleteLastInput());

      case (reseters.includes(key)):
        return dispatch(resetCalculator());

      case (operators.includes(key)):
        return dispatch(saveOperator(key));
    
      default:
        break;
    }
  }

  return (
    <div className="App">
      {
        buttons.map((button, i)=>(
          <button
            className="button"
            key={ i }
            id={ button }
            onClick={ handleButtonClick }
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
        value={ memory }
      />
      <input 
        className='mod__input'
        disabled
        value={ operator || '' }
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
