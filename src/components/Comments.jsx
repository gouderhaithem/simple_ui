import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faShareNodes,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
function Comments({ content , id , setcomments , comments}) {
  
  return (
    <div>
      <center>
        <div className="comments-css">
          <img width={40} src="https://api.multiavatar.com/GouderHicham.svg" />
          <p> {content}</p>
          <FontAwesomeIcon onClick={()=> {
            setcomments(
              comments.filter(comment => comment.id !== id)
            )
          }} style={{cursor : "pointer"}} icon={faTrash} />
        </div>
      </center>
    </div>
  );
}
export default Comments;
