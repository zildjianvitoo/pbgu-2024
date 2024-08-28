export interface UserPersonalInfoType {
  id: string;
  height: string;
  weight: string;
  foreign_language: string;
  hobby: string;
  father: string;
  mother: string;
  parents_job: string;
  parents_phone_number: string;
  parents_address: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserPersonalInfoType {
  height: string;
  weight: string;
  foreign_language: string;
  hobby: string;
  father: string;
  mother: string;
  parents_job: string;
  parents_phone_number: string;
  parents_address: string;
}
