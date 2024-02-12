import { useEffect, useState } from "react";
import { getProjects } from "../api/getProjects";
import { Project } from "../types/api/Project";

export const useProjects = (personId: number) => {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects(personId);
        setProjects(data);
      } catch (err) {
        setError("Erro ao obter os projetos da API");
      } finally {
        setLoading(false);
      }
    };
    if (personId !== -1) fetchProjects();
  }, [personId]);

  return { projects, loading, error };
};
