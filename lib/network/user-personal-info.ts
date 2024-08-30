import { axiosInstance } from "../axiosInstance";
import {
  CreateUserPersonalInfoType,
  UserPersonalInfoType,
} from "../types/user-personal-info";

export async function getAllUserPersonalInfos() {
  const { data } = await axiosInstance.get<UserPersonalInfoType[]>(
    "/user-personal-infos",
  );
  return data;
}

export async function getUserPersonalInfoByUserId(userId: string) {
  const { data } = await axiosInstance.get<UserPersonalInfoType>(
    "/user-personal-infos/users/" + userId,
  );
  return data;
}

export async function getUserPersonalInfoById(id: string) {
  const { data } = await axiosInstance.get<UserPersonalInfoType>(
    "/user-personal-infos/" + id,
  );
  return data;
}

export async function createUserPersonalInfo(
  values: CreateUserPersonalInfoType,
) {
  const { data } = await axiosInstance.post("/user-personal-infos", values);
  return data;
}

export async function updateUserPersonalInfo(
  id: string,
  values: CreateUserPersonalInfoType,
) {
  const { data } = await axiosInstance.put(
    "/user-personal-infos/" + id,
    values,
  );
  return data;
}

export async function deleteUserPersonalInfo(id: string) {
  const { data } = await axiosInstance.delete("/user-personal-infos/" + id);
  return data;
}
