import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "./components/SearchBar";
import youtubeApi from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import { Segment } from "semantic-ui-react";

export default class App extends React.Component {
  state = {
    videosMetaInfo: [],
    selectedVideoId: null,
    selectedVideoTitle: null,
    selectedVideoDesc: null,
  };

  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideoId: videoId,
    });
  };

  onTitleSelected = (videoTitle) => {
    this.setState({
      selectedVideoTitle: videoTitle,
    });
  };

  onDescSelected = (videoDesc) => {
    this.setState({
      selectedVideoDesc: videoDesc,
    });
  };

  onSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword,
      },
    });
    this.setState({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
      selectedVideoTitle: response.data.items[0].snippet.title,
      selectedVideoDesc: response.data.items[0].snippet.description,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <Segment basic inverted padded="very" textAlign="center">
          <h1>Video Browser</h1>
        </Segment>
        <Segment textAlign="center">
          <SearchBar onSearch={this.onSearch}   />
        </Segment>
        <VideoList
          onDescSelected={this.onDescSelected}
          onTitleSelected={this.onTitleSelected}
          onVideoSelected={this.onVideoSelected}
          data={this.state.videosMetaInfo}
        />
        <VideoDetail
          videoDesc={this.state.selectedVideoDesc}
          videoId={this.state.selectedVideoId}
          videoTitle={this.state.selectedVideoTitle}
        />
      </div>
    );
  }
}
