import { FinalistType, CreateFinalistType } from "../types/finalist";
import { axiosInstance } from "../axiosInstance";

export async function getAllFinalists() {
  const { data } = await axiosInstance.get<FinalistType[]>("/finalist");
  return data;
}

export async function getFinalistById(id: string) {
  const { data } = await axiosInstance.get<FinalistType>("/finalist/" + id);
  return data;
}

export async function createFinalist(values: CreateFinalistType) {
  const formData = new FormData();

  formData.append("name", values.name);
  formData.append("number", values.number);
  formData.append("gender", values.gender);
  formData.append("percentage", values.percentage as string);
  formData.append("detail", values.detail || "");
  formData.append("image", values.image);

  const { data } = await axiosInstance.post("/finalist", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}

export async function updateFinalist(id: string, values: CreateFinalistType) {
  const formData = new FormData();

  formData.append("name", values.name);
  formData.append("number", values.number);
  formData.append("gender", values.gender);
  formData.append("percentage", values.percentage as string);
  formData.append("detail", values.detail || "");
  formData.append("image", values.image);

  const { data } = await axiosInstance.put("/finalist/" + id, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
}

export async function deleteFinalist(id: string) {
  const { data } = await axiosInstance.delete("/finalist/" + id);
  return data;
}
