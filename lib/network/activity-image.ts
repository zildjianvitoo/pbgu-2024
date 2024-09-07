import { axiosInstance } from "../axiosInstance";
import {
  ActivityImageType,
  CreateActivityImage,
} from "../types/activity-image";

export async function getAllActivityImages() {
  const { data } =
    await axiosInstance.get<ActivityImageType[]>("/activity-images");
  return data;
}

export async function getActivityImageById(id: string) {
  const { data } = await axiosInstance.get<ActivityImageType>(
    "/activity-images/" + id,
  );
  return data;
}

export async function getActivityImageBySlug(slug: string) {
  const { data } = await axiosInstance.get<ActivityImageType>(
    "/activity-images/slug/" + slug,
  );
  return data;
}

export async function createActivityImage(values: CreateActivityImage) {
  const formData = new FormData();

  formData.append("activitySlug", values.activitySlug);
  formData.append("image", values.image!);

  const { data } = await axiosInstance.post("/activity-images", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}

export async function updateActivityImage(
  id: string,
  values: CreateActivityImage,
) {
  const formData = new FormData();

  formData.append("activitySlug", values.activitySlug);
  formData.append("image", values.image!);

  const { data } = await axiosInstance.put("/activity-images/" + id, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
}

export async function deleteActivityImage(id: string) {
  const { data } = await axiosInstance.delete("/activity-images/" + id);
  return data;
}
