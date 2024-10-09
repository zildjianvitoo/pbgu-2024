import { VoucherType } from "./voucher";

export interface FinalistType {
  id: string;
  name: string;
  number: string;
  gender: string;
  percentage: string;
  image: string;
  detail?: string;
  faculty: string;
  prodi: string;
  Voucher: VoucherType[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateFinalistType {
  name: string;
  number: string;
  gender: string;
  percentage?: string;
  image: string | File;
  detail?: string;
  faculty: string;
  prodi: string;
}
