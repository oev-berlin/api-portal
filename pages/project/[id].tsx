import React, { useContext, useEffect, useMemo, useState } from 'react';
import { GetStaticPropsContext } from 'next';
import { ProjectData, ProjectProps } from '../../utils/interfaces';
import { ContextProps, projectsContext } from '../../context/ProjectsContext';
import { ProjectDetails } from '../../components/ProjectDetails';
import { ServicesDisplay } from '../../components/ServicesDisplay';
import { fetchProjectsData } from '../../utils/fileSystemUtilities';
import { SwaggerComponent } from '../../components/SwaggerComponent/SwaggerComponent';
import { Button } from '../../components/Button';

export default function App({ id, projectsData }: ProjectProps) {
  projectsData = useMemo(() => (projectsData), [projectsData]);
  id = useMemo(() => (id), [id]);
  const { projects, setProjects }: ContextProps = useContext(projectsContext);
  const [project, setProject] = useState<ProjectData | null>(null);
  useEffect(() => {
    if (!projects) {
      if (setProjects) {
        setProjects(projectsData);
      }
    }
    const project: ProjectData|undefined = projectsData.find((project: ProjectData) => project.info.title === id);
    if (typeof project !== 'undefined') setProject(project);
  }, []);
  if (!project) return <h2>Loading...</h2>;

  return (
    <>
      <ProjectDetails name={project?.info.title} description={project?.info.description} />
      <ServicesDisplay title="Internal Services" services={project?.info.microservices} isMicroservice />
      <ServicesDisplay title="External Services" services={project?.info.externalservices} />
      <SwaggerComponent spec={project} />
      <Button text="Back" link="/" />
    </>

  );
}

export async function getStaticPaths() {
  const projectsData: ProjectData[] = fetchProjectsData();
  const paths = projectsData.map((project:ProjectData) => ({
    params: { id: project.info.title },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const projectsData = fetchProjectsData();
  const id = context?.params?.id;

  return {
    props: {
      projectsData,
      id,
      key: id,
    },
  };
};
