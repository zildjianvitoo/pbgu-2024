import { axiosInstance } from "../axiosInstance";
import {
  CreateUserOrganizationalExperienceType,
  UserOrganizationalExperienceType,
} from "../types/user-organizational-experience";

export async function getAllUserOrganizationalExperiences() {
  const { data } = await axiosInstance.get<UserOrganizationalExperienceType[]>(
    "/user-organizational-experiences",
  );
  return data;
}

export async function getUserOrganizationalExperiencesByUserId(userId: string) {
  const { data } = await axiosInstance.get<UserOrganizationalExperienceType[]>(
    "/user-organizational-experiences/users/" + userId,
  );
  return data;
}

export async function getUserOrganizationalExperienceById(id: string) {
  const { data } = await axiosInstance.get<UserOrganizationalExperienceType>(
    "/user-organizational-experiences/" + id,
  );
  return data;
}

export async function createUserOrganizationalExperience(
  values: CreateUserOrganizationalExperienceType,
) {
  const { data } = await axiosInstance.post(
    "/user-organizational-experiences",
    values,
  );
  return data;
}

export async function updateUserOrganizationalExperience(
  id: string,
  values: CreateUserOrganizationalExperienceType,
) {
  const { data } = await axiosInstance.put(
    "/user-organizational-experiences/" + id,
    values,
  );
  return data;
}

export async function deleteUserOrganizationalExperience(id: string) {
  const { data } = await axiosInstance.delete(
    "/user-organizational-experiences/" + id,
  );
  return data;
}
