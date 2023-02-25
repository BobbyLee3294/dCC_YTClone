import axios from "axios";
import { React, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

const CommentForm = (props) => {
  const [user] = useAuth();
  return (
    <div className="container">
      <form id="comment-form" onSubmit={props.handleSubmit}>
        <div className="mb-1 row">
          <label htmlFor="commentName" className="col-sm-1">
            Created by
          </label>
          <div className="col-sm-11">
            <h1>{user.username}</h1>
            <div className="mb-auto row">
              <label htmlFor="commentBody" className="col-sm-1">
                Comment
              </label>
              <div className="col-sm-11">
                <textarea
                  id="commentBody"
                  placeholder="Write something.."
                  value={props.comment}
                  maxLength="500"
                  onChange={props.handleInputChange}
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
