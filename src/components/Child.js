import React from "react";

function Child(props) {
    
    return(
        <div>
            <h1>Child Component</h1>
            <input type="text" onChange={(event) => {
                props.setInputValue(event.target.value)
            }} ></input>
        </div>
    )
}

export default Child;