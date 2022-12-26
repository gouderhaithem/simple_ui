import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../Context";
import Post from "../components/Post";
import mewimage from "../images/profile-user.png";
const Blog = () => {
  const { posts, setPosts } = useContext(AppContext);
  const [post, setPost] = useState({
    username: "Gouder Hicham",
    date: new Date().getTime(),
    content: "whasapp", // update content
    likes: 0,
    image: `https://api.multiavatar.com/GouderHicham.svg`,
  });
  function addPost() {
    setPosts((old) => [...old, post]);
  }
  return (
    <>
      {posts.map((post, i) => {
        return (
          <Post
            key={i}
            username={post.username}
            date={post.date}
            content={post.content}
            likes={post.likes}
            image={navigator.onLine ? post.image : mewimage}
          />
        );
      })}
      <button onClick={addPost}>add one </button>
    </>
  );
};
export default Blog;
//TODO: remove adding ip address to firebase and send messages directly !
