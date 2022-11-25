import React, { useEffect, useContext, useCallback } from 'react';
import { Header } from '../meta/Header';
import { Column } from '../components/Column';
import { MainPageInnerContainer, MainPageOuterContainer, MainPageTitle } from '../styles/pages/main/styles';
import { ProjectData } from '../utils/interfaces';
import { projectsContext, ContextProps } from '../context/ProjectsContext';
import { docType } from '../utils/types';
import { fetchProjectsData } from '../utils/fileSystemUtilities';
import { filterBy } from '../utils/testUtilities';

interface AppProps {
    projectsData: ProjectData[]
}

export default function App({ projectsData }: AppProps) {
  const { projects, setProjects }:ContextProps = useContext(projectsContext);
  useEffect(() => {
    if (setProjects) {
      setProjects(projectsData);
    }
  }, []);

  const filterProjects = useCallback((type: docType) => filterBy(projects, type), [projects]);

  return (
    <>
      <Header />
      <MainPageOuterContainer>
        <MainPageTitle>Swagger API</MainPageTitle>
        <MainPageInnerContainer container>
          <Column projects={filterProjects('backend')} name="Backend" key="backend" />
          <Column projects={filterProjects('microservice')} name="Microservices" key="microservices" />
        </MainPageInnerContainer>
      </MainPageOuterContainer>
    </>
  );
}

export async function getStaticProps() {
  const projectsData : ProjectData[] = fetchProjectsData();
  return {
    props: {
      projectsData,
    },
  };
}
