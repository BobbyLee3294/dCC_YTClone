import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import SearchBar from "../../components/SearchBar/SearchBar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
const VideoPage = (props) => {
  const { queryParam, setQueryParam } = props;

  return (
    <>
      <SearchBar setQueryParam={setQueryParam} />
      <VideoPlayer />
    </>
  );
};

export default VideoPage;
