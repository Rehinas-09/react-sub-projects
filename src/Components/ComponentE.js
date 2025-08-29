import React, { Component } from 'react'
import ComponentF from './ComponentF'
import userContext from './UserContext'

export class ComponentE extends Component {
  render() {
    return (
      <div>
        Component E {this.context}
        <ComponentF/>
      </div>
    )
  }
}
ComponentE.contextType=userContext; 
export default ComponentE 
 