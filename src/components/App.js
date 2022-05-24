import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const start = () => {
    const start = document.querySelector(".start");
    start.classList.remove("start");
    start.classList.add("ball");
    window.addEventListener("keydown", (event) => {
      if (event.keyCode === 37) {
        //Left
        console.log("left");
        // xBall(-5);
        let tmp = x - 5;
        console.log(tmp);
        setX(tmp);
        console.log(x);
      } else if (event.keyCode === 39) {
        //Right
        xBall(5);
      } else if (event.keyCode === 38) {
        //Up
        yBall(-5);
      } else if (event.keyCode === 40) {
        //Down
        yBall(5);
      }
      setBallPosition(x, y);
      // console.log(x, y);
    });
  };

  function xBall(offset) {
    setX(x + offset);
  }

  function yBall(offset) {
    setY(y + offset);
  }

  const reset = () => {};
  const renderChoice = () => {};

  return (
    <div className="playground">
      <button onClick={start} className="start">
        Start
      </button>
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
