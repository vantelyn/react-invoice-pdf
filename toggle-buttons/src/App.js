import { calcReducer, initialState } from './calculator/calcReducer';
import { useReducer } from 'react';
import './App.css';
import { addNewInput, deleteLastInput, resetCalculator } from './calculator/calcActions';
function App() {

  const element = document.body;

  const [{userInputString, userInputFloat, userInputFormattedString}, dispatch] = useReducer(calcReducer, initialState);

  element.addEventListener("keydown", function({key}) {
    if(document.getElementById(key))
      document.getElementById(key).classList.add('pressed');
  });

  element.addEventListener("keyup", function({key}) {
    if(document.getElementById(key))
      document.getElementById(key).classList.remove('pressed');
  });


  const numbers = ['0','1','2','3','4','5','6','7','8','9','.'];
  // const operators = ['+', '-', '*', '/'];
  // const modifiers = ['%', '	±'];
  // const exits = ['=', 'Enter'];

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
    dispatch(addNewInput(key));
  }

  const handleDelete = () => {
    dispatch(deleteLastInput());
  }
  const handleReset = () => {
    dispatch(resetCalculator());
  }

  return (
    <div className="App">
      {
        numbers.map((button, i)=>(
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
        value={userInputString}
      />
      <input 
        className='mod__input'
        disabled
        value={userInputFloat}
      />
      <input 
        className='mod__input'
        disabled
        value={userInputFormattedString}
      />
      <button
        onClick={ handleDelete }
      >
        D
      </button>
      <button
        onClick={ handleReset }
      >
        R
      </button>
    </div>
  );
}

export default App;
