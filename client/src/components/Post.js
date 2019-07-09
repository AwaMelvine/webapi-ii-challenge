import React from "react";
import styled from "styled-components";

const StyledPost = styled.div`
  /* border: 1px solid #e0e0e0; */
  padding: 1rem;
  margin-bottom: 1rem;
  background: white;
  border-radius: 5px;
  -webkit-box-shadow: 0px 11px 5px -9px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 0px 11px 5px -9px rgba(0, 0, 0, 0.29);
  box-shadow: 0px 11px 5px -9px rgba(0, 0, 0, 0.29);

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: blueviolet;
    }

    h2 {
      margin: 0px;
      padding: 0px;
      font-weight: 400;
    }
  }
`;

const Post = ({ post }) => {
  return (
    <StyledPost>
      <a href="/">
        <h2>
          {post.title.length > 100 ? post.title.substring(0, 24) : post.title}
        </h2>
      </a>
    </StyledPost>
  );
};

export default Post;
