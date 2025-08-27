import React, { useState } from 'react'
function Hello(){
    const [isDark,setIsDark]=useState(false)
      const toggletheme=()=>{
        setIsDark(!isDark)
      }
    return(
        <div style={{
            backgroundColor:isDark?"black":"white",
            color:isDark?"white":"black",
            padding:"20px"
        }}>
            <h2>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h2>
            <button onClick={toggletheme}>Increase</button>
        </div>
    ) 
} 
export default Hello 