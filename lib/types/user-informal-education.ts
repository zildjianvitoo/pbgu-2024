export interface UserInformalEducationType {
  id: string;
  userId: string;
  type: string;
  institution: string;
  year_start: string;
  year_end: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserInformalEducationType {
  userId: string;
  type: string;
  institution: string;
  year_start: string;
  year_end: string;
}
