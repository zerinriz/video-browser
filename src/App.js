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
  };

  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideoId: videoId,
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
          <SearchBar onSearch={this.onSearch} />
        </Segment>
        <VideoList
          onVideoSelected={this.onVideoSelected}
          data={this.state.videosMetaInfo}
        />
        <VideoDetail videoId={this.state.selectedVideoId} />
      </div>
    );
  }
}
