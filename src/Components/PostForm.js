import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      userId: "",
      title: "",
      body: "",
      id: "",
      loading: false,
      error: ""
    };
  }

  // Fetch all posts when component mounts
  componentDidMount() {
    this.fetchPosts();
  }

  // FETCH (READ)
  fetchPosts = () => {
    this.setState({ loading: true });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: "Failed to fetch posts", loading: false });
      });
  };

  // INPUT HANDLER
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // CREATE (POST)
  handleSubmit = (e) => {
    e.preventDefault();
    const { userId, title, body } = this.state;

    if (!userId || !title || !body) {
      alert("Please fill all fields");
      return;
    }

    axios
      .post("https://jsonplaceholder.typicode.com/posts", { userId, title, body })
      .then((response) => {
        alert("Post Created Successfully!");
        this.setState({
          posts: [response.data, ...this.state.posts],
          userId: "",
          title: "",
          body: ""
        });
      })
      .catch((error) => {
        console.log("Error creating post:", error);
      });
  };

  // UPDATE (PUT)
  handleUpdate = () => {
    const { id, userId, title, body } = this.state;

    if (!id) {
      alert("Enter Post ID to update!");
      return;
    }

    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        userId,
        title,
        body
      })
      .then((response) => {
        alert("Post Updated Successfully!");
        // Replace old post with updated one in UI
        const updatedPosts = this.state.posts.map((post) =>
          post.id === parseInt(id) ? response.data : post
        );
        this.setState({ posts: updatedPosts, id: "", userId: "", title: "", body: "" });
      })
      .catch((error) => {
        console.log("Update failed:", error);
      });
  };

  // DELETE POSTs 
  handleDelete = (postId) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(() => {
        alert("Post Deleted!");
        const filteredPosts = this.state.posts.filter((post) => post.id !== postId);
        this.setState({ posts: filteredPosts });
      })
      .catch((error) => {
        console.log("Delete failed:", error);
      });
  };

  render() {
    const { posts, userId, title, body, id, loading, error } = this.state;

    return (
      <div style={{ padding: "20px" }}>
        <h1>📌 React CRUD with Class Components</h1>

        {/* CREATE & UPDATE FORM */}
        <form onSubmit={this.handleSubmit} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            name="userId"
            placeholder="User ID" 
            value={userId}dddd
            onChange={this.handleChange}
            style={{ margin: "5px" }}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
            style={{ margin: "5px" }}
          />
          <input
            type="text"
            name="body"
            placeholder="Body"
            value={body}
            onChange={this.handleChange}
            style={{ margin: "5px" }}
          />
          <button type="submit" style={{ margin: "5px" }}>Create Post</button>
        </form>

        {/* UPDATE FORM */}
        <div>
          <input
            type="text"
            name="id"
            placeholder="Enter Post ID to Update"
            value={id}
            onChange={this.handleChange}
            style={{ margin: "5px" }}
          />
          <button onClick={this.handleUpdate} style={{ margin: "5px", backgroundColor: "orange" }}>
            Update Post
          </button>
        </div>

        {/* DISPLAY POSTS */}
        <h2>All Posts</h2>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul>
          {posts.slice(0, 10).map((post) => (
            <li key={post.id} style={{ marginBottom: "10px" }}>
              <b>{post.title}</b> — {post.body}  
              <button
                onClick={() => this.handleDelete(post.id)}
                style={{ marginLeft: "10px", color: "white", background: "red" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostForm;




