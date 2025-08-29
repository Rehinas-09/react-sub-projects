import React, { Component } from 'react'

 class ComponentRemove extends Component {
    constructor(props){
        super(props)
        this.state={seconds:0}
    }
    componentDidMount(){
        console.log("time started")
        this.timer=setInterval(()=>{
            this.setState({seconds:this.state.seconds+1})
        },1000)  
    } 
    componentWillUnmount(){
        clearInterval(this.timer)
    }
  render() { 
    return (
      <div>
        <h2>time:{this.state.seconds}</h2>
      </div>
    )  
  }
}

export default ComponentRemove
