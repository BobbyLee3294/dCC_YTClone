import React from "react";

const Comment = (props) => {
  return (
    <div>
      <p>{props.comments.user.username}</p>
      <p>{props.comments.text}</p>
    </div>
  );
};

export default Comment;
