import React from "react";
import { useState } from "react";
import Post from "../components/Post";
const Blog = () => {
  const [posts, setPosts] = useState([
    {
      username: "gouder hicham",
      date: 1672017195338,
      content: "hello there people",
      likes: 3,
    },
    {
      username: "ai person",
      date: new Date().getTime(),
      content: "fuck off niggers",
      likes: 1,
    },
  ]);
  return (
    <>
      {posts.map((post, i) => {
        let image = `https://api.multiavatar.com/${i}.svg`;
        return (
          <Post
            username={post.username}
            date={post.date}
            content={post.content}
            likes={post.likes}
            image={image}
          />
        );
      })}
    </>
  );
};
export default Blog;

//TODO: remove adding ip address to firebase and send messages directly !
