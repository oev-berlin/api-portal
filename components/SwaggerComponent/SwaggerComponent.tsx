import React from 'react';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic<{
  spec?: any;
}>(import('swagger-ui-react'), { ssr: false });

export function SwaggerComponent({ spec }: Record<string, any>) {
  delete spec.info;
  return <SwaggerUI spec={spec} />;
}
