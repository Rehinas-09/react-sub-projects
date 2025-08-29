import React, { Component } from 'react'

export class CompnentMouting extends Component {
    constructor(props){
        super(props)
        this.state={count:0}
        console.log("constructor called")
    }
    static getDerivedStateFromProps(props,state){
        console.log("Get Derived State from props")
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>console.log(data))
        return null;
    }
    comsponentDidMout(){
        console.log("component Mounted")
    }
  render() {
    console.log("render called")
    return (
      <div>
    <h1>Count:{this.state.count}</h1>
      </div>
    )
  }
}

export default CompnentMouting
