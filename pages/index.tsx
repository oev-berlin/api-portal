import React, { useEffect, useContext } from 'react';

import { Header } from '../meta/Header';
import { Column } from '../components/Column';
import { MainPageInnerContainer, MainPageOuterContainer, MainPageTitle } from '../styles/pages/main/styles';
import { projectData, filterBy } from '../utils/interfaces';
import { projectsContext, ContextProps } from '../context/ProjectsContext';
import { fetchProjectsData } from '../utils/functions';

interface AppProps{
    projectsData: projectData[]
}

export default function App({ projectsData }: AppProps) {
  const { projects, setProjects }:ContextProps = useContext(projectsContext);
  useEffect(() => {
    if (setProjects) {
      setProjects(projectsData);
    }
  }, []);

  const backendProjects: projectData[] = filterBy(projects, 'backend');
  const microservices: projectData[] = filterBy(projects, 'microservice');
  return (
    <>
      <Header />
      <MainPageOuterContainer xs={12}>
        <MainPageTitle>Swagger API</MainPageTitle>
        <MainPageInnerContainer container>
          <Column projects={backendProjects} name="Backend" key="backend" />
          <Column projects={microservices} name="Microservices" key="microservices" />
        </MainPageInnerContainer>
      </MainPageOuterContainer>
    </>
  );
}

export async function getStaticProps() {
  const projectsData : projectData[] = fetchProjectsData();
  return {
    props: {
      projectsData,
    },
  };
}
