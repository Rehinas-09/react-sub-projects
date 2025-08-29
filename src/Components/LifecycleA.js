import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'rehinas'
        }
        console.log("lifecycleA constructor")
    }
    static getDerivedStateFromProps(props,sate){
        (console.log("LifeCycleA getderivedstaefromprops"))
        return null;
    }
    shouldComponentUpdate(){
        console.log('Lifecycle A sholudComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("LifeCycle A get SnapShot before Update")
      return null;
    } 
    componentDidUpdate(){
        console.log("component did update method")
    }
    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }
    changeState=()=>{ 
        this.setState({
            name:'ajmal'
        })
    }
  render() {
    console.log("LifecycleA render")
    return (
      <div>   
         Life Cycle A
         <button>change state</button>
         <LifecycleB/> 
      </div>
    )
  }
}

export default LifecycleA
