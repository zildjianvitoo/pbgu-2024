import { axiosInstance } from "../axiosInstance";
import { CreateActivityType, ActivityType } from "../types/activity";

export async function getAllActivities() {
  const { data } = await axiosInstance.get<ActivityType[]>("/activities");
  return data;
}

export async function getActivityById(id: string) {
  const { data } = await axiosInstance.get<ActivityType>("/activities/" + id);
  return data;
}

export async function getActivityBySlug(slug: string) {
  const { data } = await axiosInstance.get<ActivityType>(
    "/activities/slug/" + slug,
  );
  return data;
}

export async function createActivity(values: CreateActivityType) {
  const formData = new FormData();

  formData.append("title", values.title);
  formData.append("slug", values.slug);
  formData.append("content", values.content);
  formData.append("image", values.image!);

  const { data } = await axiosInstance.post("/activities", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}

export async function updateActivity(id: string, values: CreateActivityType) {
  const formData = new FormData();

  formData.append("title", values.title);
  formData.append("slug", values.slug);
  formData.append("content", values.content);
  formData.append("image", values.image!);

  const { data } = await axiosInstance.put("/activities/" + id, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
}

export async function deleteActivity(id: string) {
  const { data } = await axiosInstance.delete("/activities/" + id);
  return data;
}
