import { Technology } from "./Technology";

export interface Person {
  id: number;
  name: string;
  status: string;
  summary: string;
  about: string;
  email: string;
  photo: string;
  phone: string;
  linkedin: string;
  github: string;
  certifications: string;
  languages: string;
  created_at: string;
  updated_at: string;
  technologies: Technology[];
}
