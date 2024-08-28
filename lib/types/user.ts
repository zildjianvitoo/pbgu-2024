export interface UserType {
  id: string;
  name: string;
  email: string;
  emailVerified?: Date;
  password: string;
  role: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserType {
  name: string;
  email: string;
  password?: string;
  role?: string;
  image?: string | File;
}
