import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 1000, // 1000 ms === 1 second
});

export default axiosInstance;
