import axios from "axios";

export const deliveries = axios.create({
  baseURL: "http://localhost:3012",
});
