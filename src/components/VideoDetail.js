import React from "react";
import { Embed } from "semantic-ui-react";

const VideoDetail = ({ videoId }) => {
  if (!videoId) {
    return (
      <span className="search-video">
        <h1> Search for a video</h1>
      </span>
    );
  }
  return (
    <Embed
      className="video-player"
      active
      source="youtube"
      iframe={`https://www.youtube.com/embed/${videoId}`}
    />
  );
};

export default VideoDetail;
