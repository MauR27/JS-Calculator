import "./App.css";

function App() {
  function onClick() {}

  // RETURN RENDER
  return (
    <div className="App">
      <div id="box-container">
        <div id="display-box"></div>
        <div id="buttons-box">
          <button className="add" id="buttons">
            +
          </button>
          <button className="subtract" id="buttons">
            -
          </button>
          <button className="divide" id="buttons">
            /
          </button>
          <button className="multiply" id="buttons">
            X
          </button>
          <button className="seven" id="buttons">
            7
          </button>
          <button className="eight" id="buttons">
            8
          </button>
          <button className="nine" id="buttons">
            9
          </button>
          <button className="four" id="buttons">
            4
          </button>
          <button className="five" id="buttons">
            5
          </button>
          <button className="zero" id="buttons">
            0
          </button>
          <button className="clear" id="buttons">
            AC
          </button>
          <button className="six" id="buttons">
            6
          </button>
          <button className="one" id="buttons">
            1
          </button>
          <button className="two" id="buttons">
            2
          </button>
          <button className="three" id="buttons">
            3
          </button>
          <button className="decimal" id="buttons">
            .
          </button>
          <button className="equals" id="buttons">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
