import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import styled from "styled-components";

const StyledPostList = styled.div`
  h1 {
    text-align: center;
    font-weight: 400;
  }
  width: 40%;
  margin: 2rem auto;
`;

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
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <StyledPostList>
        <h1>Recent Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </StyledPostList>
    );
  }
}
export default PostList;
