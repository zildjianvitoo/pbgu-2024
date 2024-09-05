export interface ActivityType {
  id: string;
  image: string | File;
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateActivityType {
  image: string | File;
  title: string;
  slug: string;
  content: string;
}
