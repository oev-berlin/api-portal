import React from 'react';
import { CardActionArea, Button } from '@mui/material';
import Link from 'next/link';
import { Microservice } from './fragments';
import { CardOuterContainer, CardTitle, CardInnerContainer } from './styles';
import { projectData } from '../../utils/interfaces';

export function Card({ projectData }: projectData) {
  return (
    <Link passHref href={`/project/${projectData.id}`}>
      <CardOuterContainer>
        <CardActionArea component={Button} sx={{ textTransform: 'none' }}>
          <CardTitle>
            {projectData.name}
          </CardTitle>
          <CardInnerContainer container spacing={2}>
            {
                        projectData.microservices.map((microserviceName: string) => (
                          <Microservice
                            serviceName={microserviceName}
                            key={microserviceName}
                          />
                        ))
}
          </CardInnerContainer>
        </CardActionArea>
      </CardOuterContainer>
    </Link>
  );
}
