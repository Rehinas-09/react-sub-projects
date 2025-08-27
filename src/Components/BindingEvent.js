import React, { Component } from 'react'
import Message from './Message'

export class BindingEvent extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"hello"
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
  clickHandler=()=>{
    this.setState({
        message:"bye"
    })
  }
  render() { 
    return (  
      <div>
        <div>{this.state.message}</div>
       {/* <button onClick={this.clickHandler.bind(this)} >click</button> */}
       {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
       <button onClick={this.clickHandler}>click</button>
      </div>
    ) 
  }
}

export default BindingEvent
