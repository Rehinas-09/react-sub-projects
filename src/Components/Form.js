import React, { Component } from 'react'

 class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            userName:'',
            comments:'',
            topic:'React'
        }
    }
    handleChange=(event)=>{
       this.setState({
        userName:event.target.value
       })
    }
    handleCommentChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({ 
            topic:event.target.value 
        }) 
    }
    handleSubmit=(event)=>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <label>UserName:<input type='text' value={this.state.userName} onChange={this.handleChange}/></label>
        <div>
            <label>Comments:
            <textarea onChange={this.handleCommentChange} value={this.state.comments}></textarea></label>
        </div> 
        <div><label>Topic
        <select value={this.state.topic}  onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option> 
        </select>
        </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form 

