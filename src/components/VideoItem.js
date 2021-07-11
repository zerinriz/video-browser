import React from "react";
import { Image, Segment } from "semantic-ui-react";

function selectVideo(videoIdObj, onVideoSelected) {
  onVideoSelected(videoIdObj.videoId);
}

function constructVideoTitles(vidoesData, onVideoSelected) {
  return vidoesData.map(({ snippet, id }, index) => {
    return (
      <Segment  size="mini" key={index} onClick={() => selectVideo(id, onVideoSelected)}>
        <Image
          centered
          size="large"
          src={snippet.thumbnails.high.url}
          key={index}
        />
        <h5>{snippet.title}</h5>
      </Segment>
    );
  });
}
const VideoItem = ({ data, onVideoSelected }) => {
  return <>{constructVideoTitles(data, onVideoSelected)}</>;
};

export default VideoItem;
