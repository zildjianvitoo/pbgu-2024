import { ActivityImageType } from "./activity-image";

export interface ActivityType {
  id: string;
  title: string;
  slug: string;
  content: string;
  ActivityImages: ActivityImageType[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateActivityType {
  title: string;
  slug: string;
  content: string;
}
