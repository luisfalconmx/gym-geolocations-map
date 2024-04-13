import axios from "axios";

export const spacexClient = axios.create({
  baseURL: "https://api.spacexdata.com/v4",
  headers: {
    Accept: "application/json",
  },
});
