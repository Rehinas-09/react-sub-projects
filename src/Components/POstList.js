import React, { Component } from 'react'
import axios from 'axios'
class POstList extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[],
            errorMsg:'',
        }
    } 
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{ 
            this.setState({posts:response.data})
        })  
        .catch(error=>{ 
            console.log(error)
           this.setState({errorMsg:"Error retreiving data"})
        })
    }
  render() {
    const {posts}=this.state
    const {errorMsg}=this.state
    return (  
      <div>
        list of posts
        {
            posts.length>0?
            posts.map(post=><div key={post.id}>{post.title}</div>):null
        }
        {
            errorMsg?<div>{errorMsg}</div>:null
        }
      </div>  
    ) 
  }
}

export default POstList
