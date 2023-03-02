import React from "react";

const Comment = (props) => {
  return (
    <div>
      <p>{props.comment.user.username}</p>
      <p>{props.coment.text}</p>
    </div>
  );
};

export default Comment;
