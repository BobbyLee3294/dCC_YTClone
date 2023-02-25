import axios from "axios";
import { React, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

let initalValues = {
  user: "",
  text: "",
  videoId: "",
};
const CommentForm = (props) => {
  const [comment, setComment] = useState("");
  const [user, token] = useAuth();
  const [formData = props.postComment(), handleInputChange, handleSubmit] =
    useCustomForm(initalValues, comment);
  //initialize postComment component
  function postComment() {
    axios
      .post(`http://127.0.0.1:8000/api/comments/`, formData, {
        headers: {
          Authorization: "Bearer: " + token,
        },
      })
      .then((response) => {
        console.log(response);
        setComment(response.data);
        console.log(response.data);
      });
    let newComment = {
      commentName: user.username,
      commentBody: comment,
      videoId: props.videoId,
    };
    setComment(newComment);
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
                  onChange={(e) => handleInputChange}
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
