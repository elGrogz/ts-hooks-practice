import { useState } from "react";

function UseStateComponent() {
  const [array, setArray] = useState<number[]>([]); // [] = never

  return (
    <div>
      <div>
        <button onClick={() => setArray([...array, array.length + 1])}>
          Add to array
        </button>
        {JSON.stringify(array)}
        <button onClick={() => setArray([])}>Reset Array</button>
      </div>
    </div>
  );
}

export default UseStateComponent;
