import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = () => {
  //const [comment, setComment] = useState("");

  useEffect(() => {
    //playVideo();
  });

  //function playVideo(){};

  //initialize comment component
  return (
    <div className="container">
      <div id="player">
        <VideoPlayer />
      </div>
      <div id="commentForm">{/* comment component */}</div>
    </div>
  );
};

export default VideoPage;
