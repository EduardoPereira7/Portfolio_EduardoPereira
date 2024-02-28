import React, { createContext, useContext, useEffect, useState } from "react";
import { ProjectCardProps } from "../types/components/ProjectCardProps";

interface ProjectContextData {
  projectDetails: ProjectCardProps | null;
  setProjectDetails: React.Dispatch<
    React.SetStateAction<ProjectCardProps | null>
  >;
}

// Função auxiliar para recuperar o estado inicial do contexto do armazenamento local
const getInitialProjectDetails = (): ProjectCardProps | null => {
  const storedDetails = localStorage.getItem("projectDetails");
  return storedDetails ? JSON.parse(storedDetails) : null;
};

// Criando o contexto
const ProjectContext = createContext<ProjectContextData | undefined>(undefined);

// Hook personalizado para acessar o contexto
export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};

// Componente provedor do contexto
export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [projectDetails, setProjectDetails] = useState<ProjectCardProps | null>(
    getInitialProjectDetails() // Inicializa o estado com os dados armazenados localmente
  );

  // Atualiza o armazenamento local sempre que o estado do contexto mudar
  useEffect(() => {
    localStorage.setItem("projectDetails", JSON.stringify(projectDetails));
  }, [projectDetails]);

  return (
    <ProjectContext.Provider value={{ projectDetails, setProjectDetails }}>
      {children}
    </ProjectContext.Provider>
  );
};
