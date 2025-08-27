// binding method one
// import React, { Component } from 'react'

// export class Binding extends Component {
//     constructor(props){
//         super(props)
//         this.state={name:"Rehi"}
//         this.handleClick=this.handleClick.bind(this)
//     }
//     handleClick(){
//         console.log(this.state.name)
//     }
//   render() {

//     return (
//       <div>
        
//         <button onClick={this.handleClick}>Click me</button>
//       </div>
//     )
//   }
// }

// export default Binding
// import React, { Component } from 'react'

// export class Binding extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             name:"Rehinas"
//         }
//     } 
//     handleClick=()=>{
//        console.log(this.state.name)
//     }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click</button>
//       </div>
//     )
//   }
// }

// export default Binding
import React, { Component } from 'react'

export class Binding extends Component {
    constructor(props){
        super(props);
        this.state={
            name:""
        }
    } 
    handleChange=(e)=>{
        this.setState({name:e.target.value})
    }
  render() {
    return (
      <div>
        <h2>Two-Way Binding Example</h2>
        <div>{this.state.name}</div>
         <input 
         type="text"
         value={this.state.name} 
         onChange={this.handleChange}/>
      </div>
    )
  }      
}

export default Binding



