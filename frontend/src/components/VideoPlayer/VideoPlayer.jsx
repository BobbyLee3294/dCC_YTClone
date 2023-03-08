import React from "react";

const VideoPlayer = (props) => {
  return (
    <div>
      <div>
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&origin=http://example.com`}
        />
      </div>
      <div>
        <h1>Title of Video</h1>
        <p>Description of Video</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
