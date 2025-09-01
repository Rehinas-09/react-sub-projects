import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type='text' value={this.props.value} placeholder="Search input recipie..." onChange={this.props.onInputChange} style={{padding:"10px",width:"250px",borderRadius:"5px",border:"1px solid gray"}}></input>
        <button onClick={this.props.onSearchClick} style={{padding:"10px 15px",marginLeft:"10px",backgroundColor:"#4CAF50", color:"white",border:"none",borderRadius:"5px",cursor:"pointer"}}>Search</button>
      </div> 
    )
  }
}

export default SearchBar

