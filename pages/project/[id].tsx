import React, { useContext, useEffect, useState } from 'react';
import { projectData } from '../../utils/interfaces';
import { ContextProps, projectsContext } from '../../context/ProjectsContext';
import { fetchProjectsData } from '../../utils/functions';
import { ProjectDetails } from '../../components/ProjectDetails';

export default function App({ id, projectsData }: { id: string, projectsData: projectData[]}) {
  const { projects, setProjects }:ContextProps = useContext(projectsContext);
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

  return (
    <>
      <ProjectDetails name={project?.name} description={project?.description} />
      <h1>{project?.externalServices}</h1>
      <h1>{project?.microservices}</h1>
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