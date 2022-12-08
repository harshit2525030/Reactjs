import axios from "axios";

export default axios.create({
  baseURL: "http://restapi.adequateshop.com/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});
