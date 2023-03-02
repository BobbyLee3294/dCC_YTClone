import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import { useParams } from "react-router-dom";

import CommmentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = () => {
  const { videoId } = useParams();
  const baseURL = `http://127.0.0.1:8000/api/comments/${videoId}/`;
  const [comments, setComments] = useState([]);
  const [formComment, setFormComment] = useState("");
  const [user, token] = useAuth();

  useEffect(() => {
    const getCommentsByVideoId = async () => {
      try {
        let response = await axios.get(baseURL);
        console.log("retriving comments...");
        getCommentsByVideoId(response.data);
        setComments(getCommentsByVideoId);
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
        console.log(response.data);
        setComments(response.data, ...comments);
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
        <div>
          <CommentList comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
