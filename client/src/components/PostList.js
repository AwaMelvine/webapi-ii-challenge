import React, { Component } from "react";
import axios from "axios";

const apiUrl = "http://localhost:4000";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.getPosts();
  }
  getPosts() {
    axios
      .get(`${apiUrl}/api/posts`)
      .then(res => {
        this.setState({ posts: res.data.posts });
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h1>Recent Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}
export default PostList;
