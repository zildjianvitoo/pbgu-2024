import { axiosInstance } from "../axiosInstance";

export async function getAllLeaderboardBujang() {
  const { data } = await axiosInstance.get<LeaderboardType[]>(
    "/leaderboards/bujang",
  );
  return data;
}

export async function getAllLeaderboardGadis() {
  const { data } = await axiosInstance.get<LeaderboardType[]>(
    "/leaderboards/gadis",
  );
  return data;
}
