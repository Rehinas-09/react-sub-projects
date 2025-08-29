import React, { Component, createRef } from "react";
import FrInput from "./FrInput";

class FrParentInput extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  handleFocus = () => {
    this.inputRef.current.focus(); 
  };

  render() {
    return (
      <div>
        <h1>Ref Forwarding Example</h1>
        <FrInput ref={this.inputRef} />
        <button onClick={this.handleFocus}>Focus Input</button>
      </div> 
    ); 
  }
} 

export default FrParentInput
