import React from "react";

function Child(props) {
  return (
    <div className="child">
      <h1>Child Component</h1>
      <input
        type="text"
        value={props.childInputValue}
        onChange={(event) => {
          props.setChildInputValue(event.target.value);
        }}
      />
    </div>
  );
}

export default Child;
