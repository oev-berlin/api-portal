import React from 'react';
import { ProjectTitleContainer, DescriptionContainer, DescriptionTextContainer } from './styles';
import { projectData } from '../../utils/interfaces';

export const ProjectDetails = ({ project }: { project: projectData }) => (
  <>
    <ProjectTitleContainer> {project.name} </ProjectTitleContainer>
    <DescriptionContainer>Description</DescriptionContainer>
    <DescriptionTextContainer>{project.description}</DescriptionTextContainer>
  </>
);
