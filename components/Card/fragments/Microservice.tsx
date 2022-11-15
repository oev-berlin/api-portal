import React from 'react';
import { Grid } from '@mui/material';
import { MicroserviceContainer } from './styles';

export const Microservice = ({ serviceName }: {serviceName: string }) => (
  <Grid item xs={12} sm={4} md={6} lg={4}>
    <MicroserviceContainer>
      {serviceName}
    </MicroserviceContainer>
  </Grid>
);
