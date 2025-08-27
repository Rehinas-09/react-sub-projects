// import React, { Component } from 'react'

// export class EventHandling extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             name:""
//         }
//         this.changeHandler=this.changeHandler.bind(this)
//     }
//     changeHandler(e){
//         this.setState({
//               name:e.target.value
//         })
//     }
//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.changeHandler} value={this.state.name}></input>
//         <div>{this.state.name}</div>
//       </div>
//     )
//   }
// }

// export default EventHandling
//onsubmit
// import React, { useState } from 'react'

// function EventHandling() {
//     const [email,setEmail]=useState("")
//    const handleSubmit=(e)=>{
//         e.preventDefault()
//         alert(`Sumbmit Email:${email}`)

//     }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
//       <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default EventHandling
//onMouseover
// import React,{useState} from 'react'

// function EventHandling() {
//     const[hover,setHover]=useState(false);
//   return (
//     <div>
//       <button onMouseOver={()=>setHover(true)}
//         onMouseOut={()=>setHover(false)}
//         style={{
//             backgroundColor:hover?"green":"blue",
//             color:"white",
//             padding:"10px 20px",
//             border:"none",
//             cursor:"pointer"
//         }}>
//             Hover Me 
    
//       </button> 
//     </div>  
//   )
// }

// export default EventHandling
//keyup
// import React, { Component } from 'react'

// export class EventHandling extends Component {
//     handleKeyDown=(e)=>{
//         console.log("key down",e.key)
//         console.log("key code",e.keyCode)
//         if(e.key=="Enter"){
//           alert("you pressed Enter!")
//         }
//     }
//   render() {
//     return (
//       <div>
//          <h2>onKeyDown Exapmle</h2>
//          <input type="text" placeholder="Type somthing" onKeyDown={this.handleKeyDown}></input>
//       </div>
//     )
//   }
// }

// export default EventHandling
// 
// import React, { Component } from 'react'

// export class EventHandling extends Component {
//     handleKeyPress=(e)=>{
//         console.log("Key pressed",e.key)
//     }
//   render() {
//     return (
//       <div>
//         <h2>onKeyPress Example</h2>
//         <input type="text" placeholder="Press a Key..." onKeyPress={this.handleKeyPress}></input>
//       </div>
//     )
//   }
// }
// export default EventHandling
//on Focus and onBlur
// import React from 'react'

// function EventHandling() {
//   return (
//     <div>
//       <input type='text' onFocus={()=>console.log("input focused")} onBlur={()=>console.log("Inputlost Focus")} >
//       </input>
//     </div>
//   )
// }

// export default EventHandling
//onDouble click
// import React from 'react'
// function EventHandling() {
//     const handleDoubleClick=()=>{
//         alert("Button Double Click")
//     }
//   return (
//     <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
//   )
// }

// export default EventHandling
import React from 'react'

function EventHandling() {
    const handleClick=(name)=>{
      alert(`Hello,${name}`)
    }
  return (
    <button onClik={()=>handleClick("Rehinas")}>Greetme</button>
  )
}

export default EventHandling