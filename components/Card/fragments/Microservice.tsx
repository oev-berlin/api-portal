import React from 'react';
import { Grid } from '@mui/material';
import { MicroserviceContainer } from './styles';
import {MicroServiceProps} from "../interfaces";

export const Microservice = ({ serviceName }: MicroServiceProps) => (
  <Grid item xs={12} sm={4} md={6} lg={4}>
    <MicroserviceContainer>
      {serviceName}
    </MicroserviceContainer>
  </Grid>
);
