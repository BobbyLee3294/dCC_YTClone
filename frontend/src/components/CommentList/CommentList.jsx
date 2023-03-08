import React from "react";
import Comment from "../Comment/Comment";

const CommentList = ({ comments }) => {
  return (
    <div>
      {Object.values(comments).map((comments, index) => (
        <Comment key={index} comments={comments} />
      ))}
    </div>
  );
};

export default CommentList;
