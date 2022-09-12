import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UseStateComponent from "./UseStateComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseContextComponent from "./UseContextComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";
import UseCustomHookComponent from "./UseCustomHookComponent";
import UseMemoComponent from "./UseMemoComponent";
import EvenMoreReactComponent from "./EvenMoreReactComponent";

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>useCustomHook</h1>
      <UseCustomHookComponent />
      <h1>useMemoHook</h1>
      <UseMemoComponent />
      <h1>EvenMoreReactComponent</h1>
      <EvenMoreReactComponent />
    </div>
  );
}

export default App;
