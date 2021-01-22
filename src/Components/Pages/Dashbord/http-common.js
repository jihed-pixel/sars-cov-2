import axios from "axios";

export default axios.create({
  baseURL: "https://9fe8cb88e538.ngrok.io",
  headers: {
    "Content-type": "application/json"
  }
});
