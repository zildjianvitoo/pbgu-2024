import { FinalistType } from "./finalist";

export interface VoucherType {
  id: string;
  code: string;
  status: string;
  price: string;
  participantId?: string;
  participant?: FinalistType;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateVoucherType {
  code?: string;
  status?: string;
  price?: string;
  participantId?: string;
  quantity?: string;
}
