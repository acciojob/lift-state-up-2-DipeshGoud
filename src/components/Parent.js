import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [parentInputValue, setParentInputValue] = useState('');
  const [childInputValue, setChildInputValue] = useState('');

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>{parentInputValue}</p>
      <Child childInputValue={childInputValue} setChildInputValue={setChildInputValue} />
      <input
        type="text"
        value={parentInputValue}
        onChange={(event) => {
          setParentInputValue(event.target.value);
        }}
      />
    </div>
  );
}

export default Parent;
