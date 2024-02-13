import { useEffect, useState } from "react";
import { getProjectImages } from "../api/getProjectImages";
import { ProjectImages } from "../types/api/ProjectImages";

export const useProjectImages = (projectId: number) => {
  const [projectImages, setProjectImages] = useState<ProjectImages[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectImages = async () => {
      try {
        const data = await getProjectImages(projectId);
        setProjectImages(data);
      } catch (err) {
        setError("Erro ao obter imagens da API");
      } finally {
        setLoading(false);
      }
    };
    fetchProjectImages();
  }, [projectId]);

  return { projectImages, loading, error };
};
