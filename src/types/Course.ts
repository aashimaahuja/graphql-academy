import { Instructor } from "./Instructor";

type Course = {
  id: string;
  title: string;
  description?: string;
  instructor?: Instructor;
  duration?: number;
  level?: string;
  price?: number;
  category?: string;
};

export type { Course };
