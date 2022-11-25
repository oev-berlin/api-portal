import React, { useContext, useEffect, useMemo, useState } from 'react';
import { projectData } from '../../utils/interfaces';
import { ContextProps, projectsContext } from '../../context/ProjectsContext';
import { ProjectDetails } from '../../components/ProjectDetails';
import { ServicesDisplay } from '../../components/ServicesDisplay';
import { fetchProjectsData } from '../../utils/fileSystemUtilities';
import { SwaggerComponent } from '../../components/SwaggerComponent/SwaggerComponent';

export default function App({ id, projectsData }: { id: string, projectsData: projectData[] }) {
  projectsData = useMemo(() => (projectsData), [projectsData]);
  id = useMemo(() => (id), [id]);
  const { projects, setProjects }: ContextProps = useContext(projectsContext);
  const [project, setProject] = useState<projectData | null>(null);
  useEffect(() => {
    if (!projects) {
      if (setProjects) {
        setProjects(projectsData);
      }
    }
    const project: projectData|undefined = projectsData.find((project: projectData) => project.info.title === id);
    if (typeof project !== 'undefined') setProject(project);
  }, []);
  if (!project) return <h2>Loading...</h2>;

  return (
    <>
      <ProjectDetails name={project?.info.title} description={project?.info.description} />
      <ServicesDisplay title="Internal Services" services={project?.info.microservices} />
      <ServicesDisplay title="External Services" services={project?.info.externalservices} />
      <SwaggerComponent spec={project} />
    </>

  );
}

export async function getStaticPaths() {
  const projectsData: projectData[] = fetchProjectsData();
  const paths = projectsData.map((project:projectData) => ({
    params: { id: project.info.title },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context:any) => {
  const projectsData = fetchProjectsData();
  return {
    props: {
      projectsData,
      id: context.params.id,
    },
  };
};
