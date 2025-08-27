import React, { useState } from 'react'

function ThemeToggle() {
    const [darkmode,setDarkmode]=useState(false)
    const clickHandler=()=>{
        setDarkmode(
            !darkmode
        )
    }
  return (
    <div>
        {darkmode?<div>🌞</div>:<div>🌙</div>}
        <button onClick={clickHandler}>click</button>
    </div>
  ) 
}

export default ThemeToggle

