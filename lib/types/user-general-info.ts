export interface UserGeneralInfoType {
  id: string;
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
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserGeneralInfoType {
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
}
