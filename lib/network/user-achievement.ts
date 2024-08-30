import { axiosInstance } from "../axiosInstance";
import {
  CreateUserAchievementType,
  UserAchievementType,
} from "../types/user-achievement";

export async function getAllUserAchievements() {
  const { data } =
    await axiosInstance.get<UserAchievementType[]>("/user-achievements");
  return data;
}

export async function getUserAchievementsByUserId(userId: string) {
  const { data } = await axiosInstance.get<UserAchievementType[]>(
    "/user-achievements/users/" + userId,
  );
  return data;
}

export async function getUserAchievementById(id: string) {
  const { data } = await axiosInstance.get<UserAchievementType>(
    "/user-achievements/" + id,
  );
  return data;
}

export async function createUserAchievement(values: CreateUserAchievementType) {
  const { data } = await axiosInstance.post("/user-achievements", values);
  return data;
}

export async function updateUserAchievement(
  id: string,
  values: CreateUserAchievementType,
) {
  const { data } = await axiosInstance.put("/user-achievements/" + id, values);
  return data;
}

export async function deleteUserAchievement(id: string) {
  const { data } = await axiosInstance.delete("/user-achievements/" + id);
  return data;
}
