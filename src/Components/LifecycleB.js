import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'rehinas'
        }
        console.log("lifecycleB constructor")
    }
    static getDerivedStateFromProps(props,sate){
        (console.log("LifeCycleB getderivedstaefromprops"))
        return null;
    }
    componentDidMount(){
        console.log("LifeCycleB componentDidMount")
    }
  render() {
    console.log("LifecycleB render")
    return (
      <div> 
         Life Cycle B
      </div>
    )
  }
}

export default LifecycleB