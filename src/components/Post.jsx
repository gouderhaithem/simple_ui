import React from "react";
import { useState } from "react";

const Post = ({ image, username, date, content, likes }) => {
  const [liked, setLiked] = useState(false);
  const [newLikes, setNewLikes] = useState(likes);
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
            <img width={25} src={image} />
            <p>{newLikes} likes</p>
          </span>
          <div className="align-center-row gap">
            <img width={25} src={image} /> <p>Share</p>
          </div>
        </div>
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
