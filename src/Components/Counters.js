import React, { Component } from 'react'

class Counters extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return this.props.render(this.state.count,this.increment)
  }
}

export default Counters

