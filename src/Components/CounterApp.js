import React, { Component } from 'react'

export class CounterApp extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        

    } 
    addHandler=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    resetHandler=()=>{
        this.setState({
            count:0
        })
    }
    subHandler=()=>{
        this.setState({
            count:this.state.count-1
        })
    } 
   
  render() {
    return (
      <div style={{
        backgroundColor:'black',
        width:'300px',
        height:'300px',
        margin:'50px'
    
      }}>
         <h1 style={{color:"white",margin:"20px",paddingTop:"30px"}}>Simple counter for Counting</h1>
         <div style={{color:"white",paddingTop:"5px",fontSize:"30px"}}>{this.state.count}</div>
           <button onClick={this.addHandler}  style={{margin:"10px",marginLeft:"5px",width:"70px",height:"40px",color:"white",backgroundColor:"black",border:"1px solid white",borderRadius:"50px"}}>+</button>
          <button onClick={this.resetHandler} style={{margin:"10px",marginLeft:"5px",width:"70px",height:"40px",color:"white",backgroundColor:"black",border:"1px solid white",borderRadius:"50px"}}>reset</button>
          <button onClick={this.subHandler} style={{margin:"10px",marginLeft:"5px",width:"70px",height:"40px",color:"white",backgroundColor:"black",border:"1px solid white",borderRadius:"50px"}}>-</button>
      </div> 
    )
  }
}

export default CounterApp

