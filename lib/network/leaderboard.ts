import { axiosInstance } from "../axiosInstance";

export async function getAllLeaderboard() {
  const { data } = await axiosInstance.get<LeaderboardType[]>("/leaderboards");
  return data;
}
