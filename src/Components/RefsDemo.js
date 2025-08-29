import React, { Component } from 'react'

export class RefsDemo extends Component {
  constructor(props){
    super(props)
    this.vedioRef=React.createRef();
  }
  playVideo=()=>{
    this.vedioRef.current.play()
  }
  pauseVideo=()=>{
    this.vedioRef.current.pause()
  }
  render() {
    return ( 
      <div>
        <h2>Vedio Control using Ref</h2>
        <video ref={this.vedioRef} width="320" height="240" controls   src="https://www.w3schools.com/html/mov_bbb.mp4" ></video>
        <button onClick={this.playVideo}>play</button>
        <button onClick={this.pauseVideo}>Pause</button>
      </div>
    )
  } 
}

export default RefsDemo



