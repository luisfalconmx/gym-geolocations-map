import { spacexClient } from "../../clients/spacexClient";
import type { getAllLandsResponse } from "./getallLands.d";

export const getAllLands = async () => {
  try {
    const response = await spacexClient.get("/landpads");
    return response.data as getAllLandsResponse;
  } catch (error) {
    console.error(error);
  }
};
