import { useState } from "react";

function UseStateComponent() {
  const [array, setArray] = useState<number[]>([]); // [] = never
  const [name, setName] = useState<string | null>(null); // [] = never

  return (
    <div>
      <div>
        <button onClick={() => setArray([...array, array.length + 1])}>
          Add to array
        </button>
        {JSON.stringify(array)}
        <button onClick={() => setArray([])}>Reset Array</button>
      </div>
      <div>
        <button onClick={() => setName("Gregor")}>Set name</button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
}

export default UseStateComponent;
