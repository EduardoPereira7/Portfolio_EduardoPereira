export interface Technology {
  id: number;
  name: string;
  color: string;
  pivot: {
    person_id: number;
    technology_id: number;
    level: number;
    created_at: string;
    updated_at: string;
  };
}

export interface Person {
  id: number;
  name: string;
  status: string;
  description: string;
  email: string;
  photo: string;
  phone: string;
  linkedin: string;
  github: string;
  certifications: string;
  languages: string;
  created_at: string;
  updated_at: string;
  projects: any[]; //! Adicione o tipo correto
  technologies: Technology[];
}
