export interface UserFormalEducationType {
  id: string;
  elementary: string;
  elementary_in: string;
  elementary_out: string;
  junior: string;
  junior_in: string;
  junior_out: string;
  senior: string;
  senior_in: string;
  senior_out: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserFormalEducationType {
  elementary: string;
  elementary_in: string;
  elementary_out: string;
  junior: string;
  junior_in: string;
  junior_out: string;
  senior: string;
  senior_in: string;
  senior_out: string;
}
