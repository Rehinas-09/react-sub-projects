import React, { Component } from 'react'

export class PropsPassing extends Component {
  render() {

    return (
      <div>
        <h1>My name is {this.props.name}</h1>
      </div>
    )
  }
}

export default PropsPassing

