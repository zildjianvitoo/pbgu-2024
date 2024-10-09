import { VoucherType, CreateVoucherType } from "../types/voucher";
import { axiosInstance } from "../axiosInstance";

export async function getAllVouchers() {
  const { data } = await axiosInstance.get<VoucherType[]>("/vouchers");
  return data;
}

export async function getSecureVouchers() {
  const { data } = await axiosInstance.get<VoucherType[]>("/vouchers/secure");
  return data;
}

export async function getVoucherById(id: string) {
  const { data } = await axiosInstance.get<VoucherType>("/vouchers/" + id);
  return data;
}

export async function createVoucher(values: CreateVoucherType) {
  const { data } = await axiosInstance.post("/vouchers", values);
  return data;
}

export async function updateVoucher(id: string, values: CreateVoucherType) {
  const { data } = await axiosInstance.put("/vouchers/" + id, values);

  return data;
}

export async function updateVoucherByCode(values: CreateVoucherType) {
  const { data } = await axiosInstance.put(
    "/vouchers/codes/" + values.code,
    values,
  );

  return data;
}

export async function deleteVoucher(id: string) {
  const { data } = await axiosInstance.delete("/vouchers/" + id);
  return data;
}
