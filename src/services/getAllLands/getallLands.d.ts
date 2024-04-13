import type { AxiosResponse } from "axios";

export interface Land {
  images: {
    large: string[];
  };
  name: string;
  full_name: string;
  status: string;
  type: string;
  locality: string;
  region: string;
  latitude: number;
  longitude: number;
  landing_attempts: number;
  landing_successes: number;
  wikipedia: string;
  details: string;
  launches: string[];
  id: string;
}

export interface getAllLandsResponse extends AxiosResponse {
  data: Land[];
}
