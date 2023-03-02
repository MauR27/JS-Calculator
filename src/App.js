import "./App.css";
import React, { useState, useEffect } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  function onClickSigns(e) {
    setInput((prev) => prev + e.target.value);
  }
  // console.log(input);

  function result() {
    if (input) {
      setInput(evaluate(input));
    }
  }

  function clear() {
    return setInput("");
  }

  // RETURN RENDER
  return (
    <div className="App">
      <div id="box-container">
        <div id="display-box">
          <h2>{input}</h2>
          {/* <h4>{textSigns}</h4> */}
        </div>
        <div id="buttons-box">
          <button className="add" id="buttons" onClick={onClickSigns} value="+">
            +
          </button>
          <button
            className="subtract"
            id="buttons"
            onClick={onClickSigns}
            value="-"
          >
            -
          </button>
          <button
            className="divide"
            id="buttons"
            onClick={onClickSigns}
            value="/"
          >
            /
          </button>
          <button
            className="multiply"
            id="buttons"
            onClick={onClickSigns}
            value="*"
          >
            X
          </button>
          <button
            className="seven"
            id="buttons"
            onClick={onClickSigns}
            value="7"
          >
            7
          </button>
          <button
            className="eight"
            id="buttons"
            onClick={onClickSigns}
            value="8"
          >
            8
          </button>
          <button
            className="nine"
            id="buttons"
            onClick={onClickSigns}
            value="9"
          >
            9
          </button>
          <button
            className="four"
            id="buttons"
            onClick={onClickSigns}
            value="4"
          >
            4
          </button>
          <button
            className="five"
            id="buttons"
            onClick={onClickSigns}
            value="5"
          >
            5
          </button>
          <button
            className="zero"
            id="buttons"
            onClick={onClickSigns}
            value="0"
          >
            0
          </button>
          <button className="clear" id="buttons" onClick={clear}>
            AC
          </button>
          <button className="six" id="buttons" onClick={onClickSigns} value="6">
            6
          </button>
          <button className="one" id="buttons" onClick={onClickSigns} value="1">
            1
          </button>
          <button className="two" id="buttons" onClick={onClickSigns} value="2">
            2
          </button>
          <button
            className="three"
            id="buttons"
            onClick={onClickSigns}
            value="3"
          >
            3
          </button>
          <button
            className="decimal"
            id="buttons"
            onClick={onClickSigns}
            value="."
          >
            .
          </button>
          <button className="equals" id="buttons" onClick={result}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
