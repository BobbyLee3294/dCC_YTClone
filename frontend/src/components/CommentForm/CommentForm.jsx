import React, { useState } from "react";

const CommentForm = () => {
  const [comment, setComment] = useState(initalValue);
  return (
    <div>
      <div>
        <form>
          <div>
            <label>
              Comment:
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
