import React from 'react';
import exampleProject from '../public/apis_docs/example_1.json';
import { ProjectDetails } from '../components/ProjectDetails';
import { projectData } from '../utils/interfaces';
import { ServicesDisplay } from '../components/ServicesDisplay/ServicesDisplay';

const testProject: projectData = exampleProject;

export default function Project() {
  return (
    <>
      <ProjectDetails project={exampleProject} />
      <ServicesDisplay title="Internal Services" services={testProject.microservices} />
      <ServicesDisplay title="External Services" services={testProject.externalServices} />
    </>
  );
}
