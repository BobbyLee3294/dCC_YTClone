import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = () => {
  useEffect(() => {
    //playVideo or something that starts the VideoPlayer component
  });
  //inialize playVideo()
  return (
    <>
      <VideoPlayer />
      {}
    </>
  );
};

export default VideoPage;
