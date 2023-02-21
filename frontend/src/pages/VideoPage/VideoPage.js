import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = () => {
  const { videoId } = useParams();

  //create a
  useEffect(() => {
    //playVideo();
  });

  //function playVideo(){};

  //initialize comment component
  return (
    <>
      <VideoPlayer videoId={videoId} />
      {}
    </>
  );
};

export default VideoPage;
