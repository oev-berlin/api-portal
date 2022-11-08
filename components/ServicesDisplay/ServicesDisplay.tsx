import React from 'react';
import { ServicesOuterContainer, ServicesContainer, TitleContainer } from './styles';
import { Microservice } from '../Card/fragments';

export const ServicesDisplay = ({ title, services }: { title: string, services: string[] }) => (
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
