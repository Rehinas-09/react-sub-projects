import React, { Component } from 'react'
import ChildC from './ChildC'

export class ParentC extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"Helo from Parent"
        }
        this.updateMessage=this.updateMessage.bind(this)

    }
    updateMessage(newMessage){
        this.setState({message:newMessage})
    } 
  render() { 
    return ( 
      <div> 
        <h2>parent Message:{this.state.message}</h2>
        <ChildC changeMessage={this.updateMessage}></ChildC>
      </div>
    )
  } 
}

export default ParentC

