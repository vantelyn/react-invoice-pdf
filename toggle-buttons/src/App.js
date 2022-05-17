import './App.css';
function App() {

  const element = document.body;

  element.addEventListener("keydown", function({key}) {
    if(document.getElementById(key))
      document.getElementById(key).classList.add('pressed');
  });
  element.addEventListener("keyup", function({key}) {
    if(document.getElementById(key))
      document.getElementById(key).classList.remove('pressed');
  });

  const buttons = ['a', 'b', 'c'];

  return (
    <div className="App">
      {
        buttons.map((button, i)=>(
          <button
            className="button"
            key={i}
            id={button}
          >
            button
          </button>
        ))
      }
    </div>
  );
}

export default App;
