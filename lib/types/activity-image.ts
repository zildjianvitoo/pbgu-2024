import { ActivityType } from "./activity";

export interface ActivityImageType {
  id: string;
  activitySlug: string;
  Activity: ActivityType;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateActivityImage {
  activitySlug: string;
  image: string | File;
}
