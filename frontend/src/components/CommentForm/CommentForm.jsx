import { default as React, default as React, useState } from "react";
import useAuth from "../../hooks/useAuth";

const CommentForm = (props) => {
  const [comment, setComment] = useState("");
  const [user, token] = useAuth();
  function handleSubmit(event) {
    event.preventDefault();
    let newComment = {
      commentName: user.username,
      commentBody: comment,
      videoId: props.videoId,
    };
    /* Question: Where do we send this to?*/
    /* Question: How do we post newComment*/
  }
  return (
    <div className="container">
      <form id="comment-form" onSubmit={handleSubmit}>
        <div className="mb-1 row">
          <label htmlFor="commentName" className="col-sm-1">
            Created by
          </label>
          <div className="col-sm-11">
            <input type="text" id="userName" value={user.username} />
            <div className="mb-auto row">
              <label htmlFor="commentBody" className="col-sm-1">
                Comment
              </label>
              <div className="col-sm-11">
                <textarea
                  id="commentBody"
                  placeholder="Write something.."
                  value={comment}
                  maxLength="500"
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
