import React from "react";
import Comment from "../Comment/Comment";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
