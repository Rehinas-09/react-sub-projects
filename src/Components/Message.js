import React, { Component } from 'react'
class Message extends Component{
    constructor(){
        super()
        this.state={
            name:"Rehi",
            age:23
        }
    }
    changeAge(){
        this.setState({
            age:this.state.age+1
        })
    }
    render(){
        return(
            <div>
              <h2>{this.state.name} is {this.state.age} years old</h2>
              <button onClick={()=>this.changeAge()}>Increase Age</button>
            </div>
        )
    }
}
export default Message;
