import { axiosInstance } from "../axiosInstance";
import {
  CreateUserGeneralInfoType,
  UserGeneralInfoType,
} from "../types/user-general-info";

export async function getAllUserGeneralInfos() {
  const { data } = await axiosInstance.get<UserGeneralInfoType[]>(
    "/user-general-infos",
  );
  return data;
}

export async function getUserGeneralInfoByUserId(userId: string) {
  const { data } = await axiosInstance.get<UserGeneralInfoType>(
    "/user-general-infos/users/" + userId,
  );
  return data;
}

export async function getUserGeneralInfoById(id: string) {
  const { data } = await axiosInstance.get<UserGeneralInfoType>(
    "/user-general-infos/" + id,
  );
  return data;
}

export async function createUserGeneralInfo(values: CreateUserGeneralInfoType) {
  const { data } = await axiosInstance.post("/user-general-infos", values);
  return data;
}

export async function updateUserGeneralInfo(
  id: string,
  values: CreateUserGeneralInfoType,
) {
  const { data } = await axiosInstance.put("/user-general-infos/" + id, values);
  return data;
}

export async function deleteUserGeneralInfo(id: string) {
  const { data } = await axiosInstance.delete("/user-general-infos/" + id);
  return data;
}
