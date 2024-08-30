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
  // const formData = new FormData();

  // formData.append("userId", values.userId);
  // formData.append("fullname", values.fullname);
  // formData.append("alias", values.alias);
  // formData.append("nim", values.nim);
  // formData.append("major", values.major);
  // formData.append("birth", values.birth);
  // formData.append("age", values.age);
  // formData.append("gender", values.gender);
  // formData.append("address", values.address);
  // formData.append("phone_number", values.phone_number);
  // formData.append("email", values.email);
  // formData.append("line", values.line);
  // formData.append("facebook", values.facebook);
  // formData.append("instagram", values.instagram);
  // formData.append("picture", values.picture as File);

  const { data } = await axiosInstance.post("/user-general-infos", values);

  return data;
}

export async function updateUserGeneralInfo(
  id: string,
  values: CreateUserGeneralInfoType,
) {
  // const formData = new FormData();
  console.log(values);
  console.log("INI IDDD", id);
  // formData.append("userId", values.userId);
  // formData.append("fullname", values.fullname);
  // formData.append("alias", values.alias);
  // formData.append("nim", values.nim);
  // formData.append("major", values.major);
  // formData.append("birth", values.birth);
  // formData.append("age", values.age);
  // formData.append("gender", values.gender);
  // formData.append("address", values.address);
  // formData.append("phone_number", values.phone_number);
  // formData.append("email", values.email);
  // formData.append("line", values.line);
  // formData.append("facebook", values.facebook);
  // formData.append("instagram", values.instagram);
  // formData.append("picture", values.picture as File);

  const { data } = await axiosInstance.put("/user-general-infos/" + id, values);

  return data;
}

export async function deleteUserGeneralInfo(id: string) {
  const { data } = await axiosInstance.delete("/user-general-infos/" + id);
  return data;
}
