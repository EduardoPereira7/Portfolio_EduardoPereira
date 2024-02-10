import React, { ReactNode, createContext, useContext } from "react";
import { usePerson } from "../hooks/usePerson";
import { Person } from "../types/api/Person";

interface PersonContextProps {
  person?: Person | null;
  loading: boolean;
  error: string | null;
  children?: ReactNode;
}

const PersonContext = createContext<PersonContextProps>({
  person: null,
  loading: true,
  error: null,
});

export const PersonProvider: React.FC<PersonContextProps> = ({ children }) => {
  const { person, loading, error } = usePerson(1);
  console.log("contexto:", person, loading, error);

  return (
    <PersonContext.Provider value={{ person, loading, error }}>
      {children}
    </PersonContext.Provider>
  );
};

export const usePersonContext = () => {
  return useContext(PersonContext);
};
