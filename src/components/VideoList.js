import React from "react";
import VideoItem from "./VideoItem";
import { List } from "semantic-ui-react";

const VideoList = ({ data, onVideoSelected }) => {
  return (
    <div className="video-list">
      <List floated="left">
        <h1>Video List</h1>
        <VideoItem data={data} onVideoSelected={onVideoSelected} />
      </List>
    </div>
  );
};

export default VideoList;
