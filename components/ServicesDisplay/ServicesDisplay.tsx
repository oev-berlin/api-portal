import React from 'react';
import { ServicesOuterContainer, ServicesContainer, TitleContainer } from './styles';
import { Microservice } from '../Card/fragments';
import { ServiceDisplayProps } from './interfaces';

export const ServicesDisplay = ({ title, services }: ServiceDisplayProps) => (
  <>
    <TitleContainer>{title}</TitleContainer>
    <ServicesOuterContainer elevation={0}>
      <ServicesContainer container spacing={2}>
        {services.map((serviceName: string) => (
          <Microservice key={serviceName} serviceName={serviceName} />
        ))}
      </ServicesContainer>
    </ServicesOuterContainer>
  </>
);
