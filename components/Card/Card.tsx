import React from 'react';
import { CardActionArea, Button } from '@mui/material';
import Link from 'next/link';
import { Microservice } from './fragments';
import { CardOuterContainer, CardTitle, CardInnerContainer } from './styles';
import { CardProps } from './interfaces';

export function Card({ projectData }: CardProps) {
  return (
    <Link passHref href={`/project/${projectData.info.title}`}>
      <CardOuterContainer>
        <CardActionArea component={Button} sx={{ textTransform: 'none' }}>
          <CardTitle>
            {projectData.info.title}
          </CardTitle>
          <CardInnerContainer container spacing={2}>
            {
                        projectData.info.microservices.map((microserviceName: string) => (
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
