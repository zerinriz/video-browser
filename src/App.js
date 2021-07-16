import React, { useState, useEffect } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "./components/SearchBar";
import youtubeApi from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import { Segment } from "semantic-ui-react";

const App = () => {
  const [videosMetaInfo, setVideosMetaInfo] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState(null);
  const [selectedVideoDesc, setSelectedVideoDesc] = useState(null);

  useEffect(() => {
    onSearch("RickRoll");
  }, []);

  const onVideoSelected = (videoId) => {
    setSelectedVideoId(videoId);
  };

  const onTitleSelected = (videoTitle) => {
    selectedVideoTitle(videoTitle);
  };

  const onDescSelected = (videoDesc) => {
    setSelectedVideoDesc(videoDesc);
  };

  const onSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword,
      },
    });
    setVideosMetaInfo(response.data.items);
    setSelectedVideoId(response.data.items[0].id.videoId);
    setSelectedVideoTitle(response.data.items[0].snippet.title);
    setSelectedVideoDesc(response.data.items[0].snippet.description);
  };

  return (
    <div className="App">
      <Segment basic inverted padded="very" textAlign="center">
        <h1>Video Browser</h1>
      </Segment>
      <Segment textAlign="center">
        <SearchBar onSearch={onSearch} />
      </Segment>
      <VideoList
        onDescSelected={onDescSelected}
        onTitleSelected={onTitleSelected}
        onVideoSelected={onVideoSelected}
        data={videosMetaInfo}
      />
      <VideoDetail
        videoDesc={selectedVideoDesc}
        videoId={selectedVideoId}
        videoTitle={selectedVideoTitle}
      />
    </div>
  );
};

export default App;
