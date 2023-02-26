import React from "react";

const VideoPlayer = (props) => {
  return (
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&origin=http://example.com`}
    ></iframe>
  );
};

export default VideoPlayer;
