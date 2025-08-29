import React, { Component } from 'react'
import styles from './todoList.module.css'
export class TodoList extends Component {
   constructor(props){
    super(props)
     this.state={
       selectedItems:[],
       newItem:"",
       todo:["trip to Goa","buy a porshe","buy a volswagon gt","sky drive"]
     }
   } 
  changeHandler=(e)=>{
    const {value,checked}=e.target;  
    if(checked){
      this.setState((prevState)=>({
           selectedItems:[...prevState.selectedItems,value]
      })) 
    }
      else{
         this.setState((prevState)=>({
             selectedItems:prevState.selectedItems.filter((item)=>item!==value)
         })) 
      } 
   } 
   handleSearchChange=e=>{
    this.setState({
     newItem:e.target.value,  
    }) 
   }
   handleSubmit=()=>{
    if(this.state.newItem.trim()!==''){
      this.setState((prevState)=>({
         todo:[...prevState.todo,prevState.newItem],
         newItem:""
      }))
        
    }
   }
   
  render() {
    return (
      <div className={styles.container}>
        <h1>Todo List</h1>
        <input type="text" placeholder='Enter New TodoList' className={styles.todo} onChange={this.handleSearchChange}/><button className={styles.btn} onClick={this.handleSubmit}>Submit</button><br></br>
        <div className={styles.inputContainer}>

         { 
          this.state.todo.map((item,index)=>{
          return  <label key={index}><input type='checkbox' value={item} onChange={this.changeHandler}></input>{item}</label>
          }) 
        }
        </div> 
        
        <h2 className={styles.completed}>Completed TodoList</h2>
        {this.state.selectedItems.length>0?(
          <ul>
            {this.state.selectedItems.map((item,index)=>{ 
             return <li key={index} className={styles.li}>{item}</li>
            })}
          </ul>
        ):(<p className={styles.items}>no item selected</p>)}
      </div> 
    )
  }    
  
}
  
export default TodoList
  