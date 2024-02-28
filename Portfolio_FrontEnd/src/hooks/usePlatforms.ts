import { useEffect, useState } from "react";
import { getPlatforms } from "../api/getPlatforms";
import { Platform } from "../types/api/Platforms";

export const usePlatforms = (personId: number) => {
  const [platforms, setPlatforms] = useState<Platform[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const data = await getPlatforms(personId);
        setPlatforms(data);
      } catch (err) {
        setError("Erro ao obter os projetos da API");
      } finally {
        setLoading(false);
      }
    };
    if (personId !== -1) fetchPlatforms();
  }, [personId]);

  return { platforms, loading, error };
};
