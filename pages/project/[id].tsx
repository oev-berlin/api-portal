import React, { useContext, useEffect, useState } from 'react';
import { projectData } from '../../utils/interfaces';
import { ContextProps, projectsContext } from '../../context/ProjectsContext';
import { ProjectDetails } from '../../components/ProjectDetails';
import { ServicesDisplay } from '../../components/ServicesDisplay';
import { fetchProjectsData } from '../../utils/fileSystemUtilities';
import { SwaggerComponent }from "../../components/SwaggerComponent/SwaggerComponent";

export default function App({ id, projectsData }: { id: string, projectsData: projectData[] }) {
  const { projects, setProjects }: ContextProps = useContext(projectsContext);
  const [project, setProject] = useState<projectData | null>(null);
  useEffect(() => {
    if (!projects) {
      if (setProjects) {
        setProjects(projectsData);
      }
    }
    const project: projectData = projectsData.find((project: projectData) => project.id === id);
    setProject(project);
  }, []);

  if (!project) return <h2>Loading...</h2>;

  return (
    <>
      <ProjectDetails name={project?.name} description={project?.description} />
      <ServicesDisplay title="Internal Services" services={project?.microservices} />
      <ServicesDisplay title="External Services" services={project?.externalServices} />
      <SwaggerComponent spec={project?.swaggerInformation}></SwaggerComponent>
    </>

  );
}

export async function getStaticPaths() {
  const projectsData: projectData[] = fetchProjectsData();
  const paths = projectsData.map((project) => ({
    params: { id: project.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const projectsData = fetchProjectsData();
  return {
    props: {
      projectsData,
      id: context.params.id,
    },
  };
};
