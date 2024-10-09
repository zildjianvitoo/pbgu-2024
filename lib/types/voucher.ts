import { FinalistType } from "./finalist";

export interface VoucherType {
  id: string;
  code: string;
  status: string;
  price: string;
  finalistId?: string;
  finalist?: FinalistType;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateVoucherType {
  code?: string;
  status?: string;
  price?: string;
  finalistId?: string;
  quantity?: string;
}
