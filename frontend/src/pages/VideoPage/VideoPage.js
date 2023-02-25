import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import { useParams } from "react-router-dom";

import CommmentForm from "../../components/CommentForm/CommentForm";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import useCustomForm from "../../hooks/useCustomForm";

let initalValues = {
  user: "",
  text: "",
  videoId: "",
};
const VideoPage = () => {
  const { videoId } = useParams();
  const baseURL = `http://127.0.0.1:8000/api/comments/?video_id=${videoId}`;
  const [comment, setComment] = useState("");
  const [user, token] = useAuth();
  const [formData = postComment(), handleInputChange, handleSubmit] =
    useCustomForm(initalValues, postComment);

  useEffect(() => {
    const getComments = async () => {
      try {
        let response = await axios.get(baseURL, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        getComments(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getComments();
  }, []);
  //initialize postComment component
  function postComment() {
    axios
      .post(`http://127.0.0.1:8000/api/comments/`, formData, {
        headers: {
          Authorization: "Bearer: " + token,
        },
      })
      .then((response) => {
        console.log(response);
        setComment(response.data);
        console.log(response.data);
      });
    let newComment = {
      commentName: user.username,
      commentBody: comment,
      videoId: videoId,
    };
    setComment(newComment);
  }
  return (
    <div>
      <div>
        <div>
          <VideoPlayer videoId={videoId} />
        </div>
        <div>
          <CommmentForm
            comment={comment}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
