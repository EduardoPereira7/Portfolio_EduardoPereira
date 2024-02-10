import { useEffect, useState } from "react";
import { getPerson } from "../api/getPerson";
import { Person } from "../types/api/Person";

export const usePerson = (personId: number) => {
  if (personId === -1) {
    return { person: null, loading: false, error: null };
  }
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const data = await getPerson(personId);
        setPerson(data);
      } catch (err) {
        setError("Erro ao obter dados da API");
      } finally {
        setLoading(false);
      }
    };

    fetchPerson();
  }, [personId]);

  return { person, loading, error };
};
