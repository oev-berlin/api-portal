import React from 'react';
import { Button, CardActionArea, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { MicroserviceContainer } from './styles';
import { MicroServiceProps } from './interfaces';

export function Microservice({ serviceName, isMicroservice }: MicroServiceProps) {
  const router = useRouter();
  function handelClick() {
    router.push(`/project/${serviceName}`, undefined, { shallow: false }).then(() => console.log('redirected')).catch((e) => console.error(e));
  }
  if (isMicroservice) {
    return (
      <Grid item xs={12} sm={4} md={6} lg={4}>
        <CardActionArea component={Button} onClick={() => handelClick()}>
          <MicroserviceContainer>
            {serviceName}
          </MicroserviceContainer>
        </CardActionArea>
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
