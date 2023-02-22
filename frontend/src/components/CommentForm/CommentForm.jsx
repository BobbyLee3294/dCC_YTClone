import React, { useState } from "react";

const CommentForm = (props) => {
  // create a function that will take the comment state and pass it down to this component to return it in a form
  const [comment, setComment] = useState("");
  const baseURL = `http://127.0.0.1:8000/api/comments/?video_id=${videoId}`;
  const [user, token] = useAuth();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response = await axios.get(baseURL, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setComment(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchComments();
  }, []);
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Comment: <input type="text" name="comment" value={comment} />
        </label>
      </form>
    </div>
  );
};

export default CommentForm;
