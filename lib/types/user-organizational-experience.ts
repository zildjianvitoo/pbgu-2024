export interface UserOrganizationalExperienceType {
  id: string;
  userId: string;
  organization: string;
  position: string;
  period: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserOrganizationalExperienceType {
  userId: string;
  organization: string;
  position: string;
  period: string;
}
