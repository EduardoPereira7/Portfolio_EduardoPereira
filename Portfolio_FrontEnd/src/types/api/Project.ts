import { Technology } from "./Technology";

export interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  thumbnail: string;
  technologies: Technology[];
}
