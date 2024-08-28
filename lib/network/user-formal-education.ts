import { axiosInstance } from "../axiosInstance";
import {
  CreateUserFormalEducationType,
  UserFormalEducationType,
} from "../types/user-formal-education";

export async function getAllUserFormalEducations() {
  const { data } = await axiosInstance.get<UserFormalEducationType[]>(
    "/user-formal-educations",
  );
  return data;
}

export async function getUserFormalEducationById(id: string) {
  const { data } = await axiosInstance.get<UserFormalEducationType>(
    "/user-formal-educations/" + id,
  );
  return data;
}

export async function createUserFormalEducation(
  values: CreateUserFormalEducationType,
) {
  const { data } = await axiosInstance.post("/user-formal-educations", values);
  return data;
}

export async function updateUserFormalEducation(
  id: string,
  values: CreateUserFormalEducationType,
) {
  const { data } = await axiosInstance.put(
    "/user-formal-educations/" + id,
    values,
  );
  return data;
}

export async function deleteUserFormalEducation(id: string) {
  const { data } = await axiosInstance.delete("/user-formal-educations/" + id);
  return data;
}
