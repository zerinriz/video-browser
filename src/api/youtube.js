import axios from "axios";
const KEY = "AIzaSyBhMRqFiov__NyJ0tfsMnVWi3kzrDICfJU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
  headers: {},
});
