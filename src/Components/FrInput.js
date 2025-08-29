

// function FrInput() {
//   return (
//     <div>
//       <input type="text"></input>
//     </div>
//   )
//
import React from 'react'

const FrInput=React.forwardRef((props,ref)=> {
  return (
    <div>
      <input 
      type='text'
      ref={ref}
      placeholder="Enter your name"
      style={{padding:"8px",fontSize:"16px"}}></input>
           <input 
      type='text'
      ref={ref}
      placeholder="Enter your address"
      style={{padding:"8px",fontSize:"16px"}}></input>
              <input 
      type='text'
      ref={ref}
      placeholder="Enter your FullName"
      style={{padding:"8px",fontSize:"16px"}}></input>
    </div>
  )
})

export default FrInput

