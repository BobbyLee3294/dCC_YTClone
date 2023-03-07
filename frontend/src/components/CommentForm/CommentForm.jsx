import { React } from "react";
import useAuth from "../../hooks/useAuth";

const CommentForm = ({ formComment, setFormComment, postComment }) => {
  const [user, token] = useAuth();
  return (
    <div className="container">
      <form id="comment-form" onSubmit={postComment}>
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
                  name="commentBody"
                  placeholder="Write something.."
                  value={formComment}
                  maxLength="500"
                  onChange={(e) => setFormComment(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
