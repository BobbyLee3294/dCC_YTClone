import React from "react";

const CommentList = ({ setFormComment }) => {
  return (
    <div>
      {setFormComment.map((comment, index) => {
        return <div key={index}>{comment}</div>;
      })}
    </div>
  );
};

export default CommentList;
