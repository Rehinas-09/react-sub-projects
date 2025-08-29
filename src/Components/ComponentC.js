import React, { Component } from 'react'
import ComponentE from './ComponentE'

export class ComponentC extends Component {
  render() {
    return (
      <div>
        Component C
        <ComponentE/>
      </div>
    )
  }
}

export default ComponentC
