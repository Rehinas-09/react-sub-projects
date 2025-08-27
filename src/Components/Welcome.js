import React,{Component} from 'react'
import Message from './Message'
class Welcome extends Component{
    constructor(){
        super()
        this.state={
             Message:"Welcome visitor"
        }
    }
    render(){
      return <h1>Welcome {this.props.name} a.s.a {this.props.heroname}</h1>
    }
}
export default Welcome