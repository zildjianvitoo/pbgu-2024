export interface UserAchievementType {
  id: string;
  userId: string;
  achievement: string;
  instance: string;
  year: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserAchievementType {
  userId: string;
  achievement: string;
  instance: string;
  year: string;
}
