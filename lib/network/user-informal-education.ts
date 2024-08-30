import { axiosInstance } from "../axiosInstance";
import {
  CreateUserInformalEducationType,
  UserInformalEducationType,
} from "../types/user-informal-education";

export async function getAllUserInformalEducations() {
  const { data } = await axiosInstance.get<UserInformalEducationType[]>(
    "/user-informal-educations",
  );
  return data;
}

export async function getUserInformalEducationsByUserId(userId: string) {
  const { data } = await axiosInstance.get<UserInformalEducationType[]>(
    "/user-informal-educations/users/" + userId,
  );
  return data;
}

export async function getUserInformalEducationById(id: string) {
  const { data } = await axiosInstance.get<UserInformalEducationType>(
    "/user-informal-educations/" + id,
  );
  return data;
}

export async function createUserInformalEducation(
  values: CreateUserInformalEducationType,
) {
  const { data } = await axiosInstance.post(
    "/user-informal-educations",
    values,
  );
  return data;
}

export async function updateUserInformalEducation(
  id: string,
  values: CreateUserInformalEducationType,
) {
  const { data } = await axiosInstance.put(
    "/user-informal-educations/" + id,
    values,
  );
  return data;
}

export async function deleteUserInformalEducation(id: string) {
  const { data } = await axiosInstance.delete(
    "/user-informal-educations/" + id,
  );
  return data;
}
