import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import { useParams } from "react-router-dom";

import CommmentForm from "../../components/CommentForm/CommentForm";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import useCustomForm from "../../hooks/useCustomForm";

let initalValues = {
  commentName: "",
  videoId: "",
  text: "",
};
const VideoPage = () => {
  const { videoId } = useParams();
  const baseURL = `http://127.0.0.1:8000/api/comments/${videoId}/`;
  const [formComment, setFormComment] = useState("");
  const [user, token] = useAuth();
  const [formData = postComment(), handleInputChange, handleSubmit] =
    useCustomForm(initalValues, postComment);

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
  function postComment() {
    axios
      .post(baseURL, formData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);
        setComment(response.data);
      });
    let newComment = {
      commentName: user.username,
      videoId: videoId,
      text: formComment,
    };
    setFormComment(newComment);
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
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div>{/*  CommentList to show all the comments*/}</div>
      </div>
    </div>
  );
};

export default VideoPage;
