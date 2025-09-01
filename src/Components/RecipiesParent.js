import React, { Component } from 'react'
import recipieData from "./recipes.json"
import SearchBar from './SearchBar'
export class RecipiesParent extends Component {
  constructor(props){
    super(props)
    this.state={
      recipe:[],
      filteredRecipes:[],
      searchQuery:''
    }
  }
  componentDidMount(){
    this.setState({
      recipe:recipieData,
      filteredRecipes:recipieData
    })
  }
  handleInputChange=(event)=>{
    this.setState({
      searchQuery:event.target.value
    })
  }
  handleClick=()=>{
    const keyword=this.state.searchQuery.toLowerCase();
    const result=this.state.recipe.filter(recipe=>{
      recipe.title.toLowerCase().includes(keyword)
    })
    this.setState({filteredRecipes:result})
  }
  render() {
    return ( 
      <div style={{textAlign:"center",padding:"20px"}}>
        <h1>Recipie Finder</h1>
        <SearchBar value={this.state.searchQuery} onInputChange={this.handleInputChange} onSearchClick={this.handleClick}/>
        <h3>Total Recipies:{this.state.filteredRecipes.length}</h3>
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"20px",marginTop:"20px"}}>
           {this.state.filteredRecipes.length > 0 ? (
            this.state.filteredRecipes.map((recipe) => (
              <div
                key={recipe.id} njnjnjn
                style={{ 
                  width: "200px",  
                  padding: "10px", 
                  border: "1px solid #ccc", 
                  borderRadius: "10px",
                  textAlign: "center",
                  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"
                }}
              > 
                <img
                  src={recipe.image} 
                  alt={recipe.title}
                  style={{ width: "100%", borderRadius: "5px" }}
                />
                <h4>{recipe.title}</h4>
              </div>
            ))
          ) : (
            <p>No recipe found in this</p>
          )}
        </div>
      </div>
    )
  }
}

export default RecipiesParent

