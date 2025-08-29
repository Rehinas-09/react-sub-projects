import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(){
        super()
        this.state={count:0}
    }
    shouldComponentUpdate(nextProps,nextSate){
         console.log("SCU-should update?")
         return nextSate.count<=5 
    }
    componentDidUpdate(preProps,prevState){
        console.log("UDC - Component updated");
        if(prevState.count!==this.state.count){
            console.log(`Count chnaged from ${prevState.count} to ${this.state.count}`)
        }
    } njn
  render() {
    
    return (
      <div>
        <h2>Count:{this.state.count}</h2>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
      </div>
    )
  }
}

export default LifeCycle

