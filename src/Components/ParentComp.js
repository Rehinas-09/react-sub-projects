import React, { Component } from 'react'
import RegCom from './RegCom'
import PureCom from './PureCom'
import Memo from './Memo'

export class ParentComp extends Component {
    constructor(props){
      super(props)
      this.state={
        name:'rehinas'
      }
    } 
    componentDidMount(){
        setInterval(()=>{
           this.setState({ 
            name:"Rehinas"
           }) 
        },2000)
    } 
  render() {
    console.log('parent Component Render') 
    return (  
      <div> 
        Parent Component 
        <Memo name={this.state.name}/> 
         {/* <RegCom name={this.state.name}></RegCom>
         <PureCom name={this.state.name}></PureCom> */}
      </div>
    )
  }
}
export default ParentComp
