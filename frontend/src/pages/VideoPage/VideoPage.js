import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import SearchBar from "../../components/SearchBar/SearchBar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = () => {
  const { videoId } = useParams();
  const baseURL = `http://127.0.0.1:8000/api/comments/${videoId}/`;
  const [formComment, setFormComment] = useState("");
  const [user, token] = useAuth();

  useEffect(() => {
    const getCommentsByVideoId = async () => {
      try {
        let response = await axios.get(baseURL);
        getCommentsByVideoId(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
  }, []);
  //initialize postComment component
  function postComment(e) {
    e.preventDefault();
    let newComment = {
      video_id: videoId,
      text: formComment,
    };
    axios
      .post(baseURL, newComment, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <div>
      <div>
        <div>
          <VideoPlayer videoId={videoId} />
        </div>
        <div>
          <CommmentForm
            formComment={formComment}
            setFormComment={setFormComment}
            postComment={postComment}
          />
        </div>
        <div>{/*  CommentList to show all the comments*/}</div>
      </div>
    </div>
  );
};

export default VideoPage;
