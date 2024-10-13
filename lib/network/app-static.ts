import { axiosInstance } from "../axiosInstance";
import { AppStatics, CreateAppStatics } from "../types/app-static";

export async function getAllAppStatics() {
  const { data } = await axiosInstance.get<CreateAppStatics[]>("/app-statics");
  return data;
}

export async function getAppStaticByName(name: string) {
  const { data } = await axiosInstance.get<AppStatics>("/app-statics/" + name);
  return data;
}

export async function createAppStatic(values: CreateAppStatics) {
  const { data } = await axiosInstance.post("/app-statics", values);
  return data;
}

export async function updateAppStatic(name: string, values: CreateAppStatics) {
  const { data } = await axiosInstance.put("/app-statics/" + name, values);

  return data;
}

export async function deleteAppStatic(name: string) {
  const { data } = await axiosInstance.delete("/app-statics/" + name);
  return data;
}
