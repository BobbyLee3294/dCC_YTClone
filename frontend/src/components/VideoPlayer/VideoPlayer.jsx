import React from "react";

const VideoPlayer = () => {
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("existing-iframe", {
      events: {
        onReady: onPlayerReady,
        onStageChange: onPlayerStageChange,
      },
    });
  }

  function onPlayerReady(e) {
    document.getElementById("existing-iframe").style.borderColor = "#FF6D00";
  }
  function changeBorderColor(playerstatus) {
    let color;
    if (playerstatus == -1) {
      color = "#34747F";
    } else if (playerstatus == 0) {
      color = "#FFFF00";
    } else if (playerstatus == 1) {
      color = "#33691E";
    } else if (playerstatus == 2) {
      color = "#DD2C00";
    } else if (playerstatus == 3) {
      color = "#AA00FF";
    } else if (playerstatus == 5) {
      color = "#FF6D00";
    }
    if (color) {
      document.getElementById("existing-iframe").style.borderColor - color;
    }
  }
  function onPlayerStageChange(e) {
    changeBorderColor(e.data);
  }
  return (
    <>
      <iframe
        id="existing-iframe"
        width="630"
        height="360"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"
        style={{ border: "solid 4px #3747F" }}
      ></iframe>
    </>
  );
};
export default VideoPlayer;
