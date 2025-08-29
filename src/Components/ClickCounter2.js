import React, { Component } from 'react'

export class ClickCounter2 extends Component {
  
  render() {
    const {count,increment}=this.props
    return (
      <div> 
        <button onClick={increment}>Count {count} times</button>
      </div>
    )
  } 
} 

export default ClickCounter2
