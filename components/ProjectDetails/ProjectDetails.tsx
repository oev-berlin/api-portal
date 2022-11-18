import React from 'react';
import { StyledH1, Description, Text } from './styles';
import { projectData } from '../../utils/interfaces';

export const ProjectDetails = ({ project }: { project: projectData }) => (
  <>
    <StyledH1> {project.name} </StyledH1>
    <Description>Description</Description>
    <Text>{project.description}</Text>
  </>
);
