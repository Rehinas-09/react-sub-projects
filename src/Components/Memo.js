import React from 'react'

function Memo({names}) {
    console.log("Rendering memo Component")
  return (
    <div>
       {names} 
    </div> 
  )
}

export default React.memo(Memo)
