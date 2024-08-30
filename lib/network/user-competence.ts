import { axiosInstance } from "../axiosInstance";
import {
  CreateUserCompetenceType,
  UserCompetenceType,
} from "../types/user-competence";

export async function getAllUserCompetences() {
  const { data } =
    await axiosInstance.get<UserCompetenceType[]>("/user-competences");
  return data;
}

export async function getUserCompetencesByUserId(userId: string) {
  const { data } = await axiosInstance.get<UserCompetenceType[]>(
    "/user-competences/users/" + userId,
  );
  return data;
}

export async function getUserCompetenceById(id: string) {
  const { data } = await axiosInstance.get<UserCompetenceType>(
    "/user-competences/" + id,
  );
  return data;
}

export async function createUserCompetence(values: CreateUserCompetenceType) {
  const { data } = await axiosInstance.post("/user-competences", values);
  return data;
}

export async function updateUserCompetence(
  id: string,
  values: CreateUserCompetenceType,
) {
  const { data } = await axiosInstance.put("/user-competences/" + id, values);
  return data;
}

export async function deleteUserCompetence(id: string) {
  const { data } = await axiosInstance.delete("/user-competences/" + id);
  return data;
}
