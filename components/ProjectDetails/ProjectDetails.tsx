import React from 'react';
import { StyledH1, Description, Text } from './styles';
import { ProjectDetailsProps } from './interfaces';

export const ProjectDetails = ({ name, description }: ProjectDetailsProps) => (
  <>
    <StyledH1> {name} </StyledH1>
    <Description>Description</Description>
    <Text>{description}</Text>
  </>
);
