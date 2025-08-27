import React, { Component } from 'react'
class Counter extends Component{
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }
  increment(){
    this.setState((prevState)=>({
      count:prevState.count+1
    }))
  } 
  incrementFive(){
    this.increment() 
    this.increment()
    this.increment()  
    this.increment()
    this.increment()
  }


  render(){ 
    return( 
      <div> 
      <div>count:-{this.state.count}</div>
      <button onClick={()=>this.incrementFive()}>count</button>
      </div> 
    )
  }
}
export default Counter