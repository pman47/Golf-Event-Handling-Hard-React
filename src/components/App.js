import React, { Component, useState, useEffect, useCallback } from "react";
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
    start.innerHTML = "";
  };

  const keyHandler = (event) => {
    if (event.keyCode === 37) {
      setX(x - 5);
    } else if (event.keyCode === 39) {
      setX(x + 5);
    } else if (event.keyCode === 38) {
      setY(y - 5);
    } else if (event.keyCode === 40) {
      setY(y + 5);
    }
    let ballPositionClone = { ...ballPosition };
    ballPositionClone.left = x + "px";
    ballPositionClone.top = y + "px";
    setBallPosition(ballPositionClone);
    // console.log(ballPosition);
  };

  useEffect(() => {
    // console.log(x);
    // console.log(y);
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  });

  const reset = () => {};
  const renderChoice = () => {};

  return (
    <div className="playground">
      <button
        onClick={start}
        style={{ left: ballPosition.left, top: ballPosition.top }}
        className="start"
      >
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
