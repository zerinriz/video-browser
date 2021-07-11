import axios from "axios";
const KEY = "AIzaSyCqq6Y4zUDeN16nHrlIMkYqOi9SUcwTS7w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
  headers: {},
});
