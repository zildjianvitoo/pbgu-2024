import { UserType } from "./user";

export interface UserGeneralInfoType {
  id: string;
  userId: string;
  User: UserType;
  fullname: string;
  alias: string;
  nim: string;
  major: string;
  birth: string;
  age: string;
  gender: string;
  address: string;
  phone_number: string;
  email: string;
  line: string;
  facebook: string;
  instagram: string;
  picture?: string | File;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserGeneralInfoType {
  userId?: string;
  fullname: string;
  alias: string;
  nim: string;
  major: string;
  birth: string;
  age: string;
  gender: string;
  address: string;
  phone_number: string;
  email: string;
  line: string;
  facebook: string;
  instagram: string;
  picture?: string | File;
}
