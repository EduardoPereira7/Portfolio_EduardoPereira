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
