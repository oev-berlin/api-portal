import React from 'react';
import { CardActionArea, Grid } from '@mui/material';
import { MicroserviceContainer } from './styles';
import { MicroServiceProps } from './interfaces';

export function Microservice({ serviceName, isMicroservice }: MicroServiceProps) {
  if (isMicroservice) {
    return (
      <Grid item xs={12} sm={4} md={6} lg={4}>
        <a href={`/project/${serviceName}`}>
            <MicroserviceContainer>
              {serviceName}
            </MicroserviceContainer>
        </a>
      </Grid>
    );
  }

  return (
    <Grid item xs={12} sm={4} md={6} lg={4}>
      <MicroserviceContainer elevation={1}>
        {serviceName}
      </MicroserviceContainer>
    </Grid>
  );
}
