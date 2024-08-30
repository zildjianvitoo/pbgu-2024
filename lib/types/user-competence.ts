export interface UserCompetenceType {
  id: string;
  userId: string;
  field: string;
  skill: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserCompetenceType {
  userId: string;
  field: string;
  skill: string;
}
