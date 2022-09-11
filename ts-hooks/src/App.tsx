import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UseStateComponent from "./UseStateComponent";
import UseEffectComponent from "./UseEffectComponent";

function App() {
  return (
    <div>
      <div>
        <h1>useState</h1>
        <UseStateComponent />
      </div>
      <div>
        <h1>useEffect</h1>
        <UseEffectComponent />
      </div>
    </div>
  );
}

export default App;
