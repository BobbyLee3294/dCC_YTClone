import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { KEY } from "../../YTAPIKey";

import CommmentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = () => {
  const { videoId } = useParams();
  const baseURL = `http://127.0.0.1:8000/api/comments/${videoId}/`;
  const relatedURL = `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&part=snippet&type=video&key=${KEY}`;
  const [comments, setComments] = useState([]);
  const [related, setRelated] = useState([]);
  const [formComment, setFormComment] = useState("");
  const [user, token] = useAuth();

  useEffect(() => {
    getCommentsByVideoId();
    getRelatedVideos();
  }, []);

  async function getCommentsByVideoId() {
    try {
      axios
        .get(baseURL, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          console.log("Retriving comments...");
          setComments(response.data, ...comments);
        });
    } catch (error) {
      console.log(error.message);
    }
  }
  async function getRelatedVideos() {
    try {
      axios.get(relatedURL).then((response) => {
        console.log("Related Videos retrived.");
        setRelated(response.data.items);
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  //initialize postComment function which will also be used as a handleSubmit handler for CommentForm
  async function postComment(e) {
    e.preventDefault();
    let newComment = {
      video_id: videoId,
      text: formComment,
    };
    try {
      axios
        .post(baseURL, newComment, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(async (response) => {
          console.log(response.data.user.username);
          console.log(response.data.text);
          await getCommentsByVideoId();
        });
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <div>
        <div>
          <VideoPlayer videoId={videoId} />
        </div>
        <div>
          <RelatedVideos related={related} />
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
