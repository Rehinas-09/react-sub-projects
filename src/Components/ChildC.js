import React, { Component } from 'react'

export class ChildC extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.changeMessage("Updated from child")}>change parent Message</button>
      </div>
    )
  }
}

export default ChildC
