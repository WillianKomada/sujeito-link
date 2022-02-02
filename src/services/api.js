import axios from "axios";

export const key = "40b6d160a340b6f0368608b8535cccc3ca108b39";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
