import './App.css';
import { calc, negate } from './_CalculatorHelpers';
function App() {

  const element = document.body;

  element.addEventListener("keydown", function({key}) {
    console.log(key)
    if(document.getElementById(key))
      document.getElementById(key).classList.add('pressed');
  });
  element.addEventListener("keyup", function({key}) {
    if(document.getElementById(key))
      document.getElementById(key).classList.remove('pressed');
  });


  const buttons = ['a', 'b', 'c'];

  const handlePressButton = (event) => {
    const key = event.target.id;
    element.dispatchEvent(new KeyboardEvent('keydown', {key}));
  }
  const handleReleaseButton = (event) => {
    const key = event.target.id;
    element.dispatchEvent(new KeyboardEvent('keyup', {key}));
  }

  console.log(negate(calc(2,5,'%')))

  return (
    <div className="App">
      {
        buttons.map((button, i)=>(
          <button
            className="button"
            key={i}
            id={button}
            onMouseDown={ handlePressButton }
            onMouseUp={ handleReleaseButton}
          >
            {button}
          </button>
        ))
      }
    </div>
  );
}

export default App;
