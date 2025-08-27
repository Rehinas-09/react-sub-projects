import React, { Component } from 'react'
import styles from './todoList.module.css'
export class TodoList extends Component {
   constructor(props){
    super(props)
     this.state={
       selectedItems:[]
     }
   }
   changeHandler=(e)=>{
    const {value,checked}=e.target;
   }
  render() {
    return (
      <div className={styles.container}>
        <h1>Todo List</h1>
        <input type="text" placeholder='Enter New TodoList' className={styles.todo} /><button className={styles.btn}>Submit</button><br></br>
        <div className={styles.inputContainer}>
        <label><input type='checkbox' value="Trip to Goa" onchange={this.changeHnadler}/>Trip to Goa</label>
        <label><input type='checkbox' value="buy a porshe" onchange={this.changeHnadler}/>Buy a Porshe</label>
        <label><input type='checkbox' value='buy a volswagon gt' onchange={this.changeHandler}/>buy a volswagon gt</label>
        <label><input type='checkbox' value='sky drive' onchange={this.changeHnadler}/>Sky drive</label>
        </div>
      </div>
    )
  }   
  
}
  
export default TodoList
  