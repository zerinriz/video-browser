import React from "react";
import { Embed } from "semantic-ui-react";

const VideoDetail = ({ videoId, videoTitle, videoDesc }) => {
  return (
    <div>
      <Embed
        className="video-player"
        active
        source="youtube"
        iframe={`https://www.youtube.com/embed/${videoId}`}
      />
      <div>
        <h3>{videoTitle}</h3>
        <h4>{videoDesc}</h4>
      </div>
    </div>
  );
};

export default VideoDetail;
