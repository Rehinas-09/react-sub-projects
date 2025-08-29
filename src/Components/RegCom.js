import React, { Component } from 'react'

export class RegCom extends Component {
  render() {
    console.log(" ***regular Component render ****")
    return (
      <div> 
        Regular Component {this.props.name}
      </div> 
    )
  }
}  

export default RegCom 
