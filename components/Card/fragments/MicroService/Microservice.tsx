import React from 'react';
import { CardActionArea, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { MicroserviceContainer } from './styles';
import { MicroServiceProps } from './interfaces';

export function Microservice({ serviceName, isMicroservice }: MicroServiceProps) {
  const router = useRouter();
  function handelClick() {
    if (isMicroservice) {
      router.push(`/project/${serviceName}`);
    }
  }
  return (
    <Grid item xs={12} sm={4} md={6} lg={4}>
      <CardActionArea onClick={() => handelClick()} disabled={!isMicroservice}>
        <MicroserviceContainer>
          {serviceName}
        </MicroserviceContainer>
      </CardActionArea>
    </Grid>
  );
}
