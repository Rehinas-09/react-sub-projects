// import React, { Component } from 'react'

// export class UserGreeting extends Component {
//    constructor(props){
//     super(props)
//     this.state={
//         isLoggedIn:false
//     } 
//    }
//   render() {
//    let message
//    if(this.state.isLoggedIn){
//     message=<div>Welcome Rehinas</div>
//    }
//    else{
//      message=<div>Welcome guest</div>
//    }
//    return(
//     <div>{message}</div>
//    )
  
   
//   }
// }

// export default UserGreeting
//  import React, { Component } from 'react'
 
//  export class UserGreeting extends Component {
//     constructor(props){
//         super(props) 
//         this.state=({
//             isLogedIn:false
//         }) 
//     } 
//    render(){
//    return this.state.isLogedIn && <div>welcome rehinas</div>
//    }
//  }
 
//  export default UserGreeting
// import React, { Component } from 'react'

// export class UserGreeting extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             role:"admin"
//         }
//     }
//     renderContent(){
//         switch(this.state.role){
//             case "admin":
//                 return <h2>Welcome,Admin</h2>;
//             case "user":
//                 return <h2>Welcome, User</h2>
//             case "guest":
//                 return <h2>Welcome, Guest! please sign Up</h2> 
//             default:
//                 return <h2>Invalid Role</h2>       
//         }
//     }
//   render() {
//     return <div>{this.renderContent}</div>
//   }
// }

// export default UserGreeting
import React, { Component } from 'react'

export class UserGreeting extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
} 

export default UserGreeting
