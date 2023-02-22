import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import { useParams } from "react-router-dom";

import CommmentForm from "../../components/CommentForm/CommentForm";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { useCustomForm } from "../../hooks/useCustomForm";

const VideoPage = () => {
  const { videoId } = useParams();
  const baseURL = `http://127.0.0.1:8000/api/comments/?video_id=${videoId}`;
  const [user, token] = useAuth();

  useEffect(() => {
    const getComments = async () => {
      try {
        let response = await axios.get(baseURL, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setComments(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getComments();
  }, []);
  //initialize comment component
  return (
    <div>
      <div>
        <div>
          <VideoPlayer videoId={videoId} />
        </div>
        <div>{/* <CommmentForm /> */}</div>
      </div>
    </div>
  );
};

export default VideoPage;
