import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import {
  faCoffee,
  faShareNodes,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Comments from "./Comments";

const Post = ({ image, username, date, content, likes }) => {
  //state
  const [liked, setLiked] = useState(false);
  const [newLikes, setNewLikes] = useState(likes);
  const [comments, setcomments] = useState([]); 
  const [commentContent , setCommentContent] = useState("");
  function add_comment(e){
    e.preventDefault()
    setcomments(oldComments => [...oldComments , {commentContent : commentContent , id : Math.random()}])
    setCommentContent("");
  }
  return (
    <>
      <div className="card_d" style={{ position: "relative" }}>
        <div className="expand">
          <div className="gap center">
            <img width={40} src={image} />
            <div className="flex-start">
              <strong> {username}</strong>
              <span style={{ marginTop: "0.25rem" }}>
                {formDate(new Date(date))}
              </span>
            </div>
          </div>
          <div className="expand-btns">
            <strong className="edit-button">⋮</strong>
          </div>
        </div>
        <p
          style={{
            position: "relative",
            marginTop: "1.6rem",
            marginBottom: "1.6rem",
          }}
        >
          {content}
        </p>
        <div className="expand">
          <span
            onClick={() => {
              setLiked((old) => !old);
              if (liked) {
                setNewLikes((old) => old - 1);
              } else {
                setNewLikes((old) => old + 1);
              }
              console.log(newLikes);
            }}
            className="align-center-row gap cursor"
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            <p>{newLikes} likes</p>
          </span>
          <div className="align-center-row gap">
            <FontAwesomeIcon icon={faShareNodes} /> <p>Share</p>
          </div>
        </div>
        <div className="allcomments-container"></div>
        <form onSubmit={add_comment} className="comment-container">
          <img width={40} src={image} />
          <input
            type="text"
            value={commentContent}
            onChange={e=> setCommentContent(e.target.value)}
            className="comment"
          />
          <button type="submit" >Add</button>
        </form>
        {comments.map(comment => <Comments comments={comments} content={comment.commentContent} id={comment.id} setcomments={setcomments}/>)}
      </div>
    </>
  );
};

export default Post;
export function formDate(date) {
  let time = "";
  if (date.getHours() > 12) {
    time = "PM";
  } else {
    time = "AM";
  }
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} ${time}`;
}