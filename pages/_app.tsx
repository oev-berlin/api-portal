import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import { ContextProps, projectsContext } from '../context/ProjectsContext';
import { projectData } from '../utils/interfaces';

function MyApp({ Component, pageProps }: AppProps):JSX.Element {
  const [projects, setProjects] = useState<projectData[]>([]);
  const contextProps:ContextProps = useMemo(() => ({ projects, setProjects }), [projects, setProjects]);

  return (
    <projectsContext.Provider value={contextProps}>
      <Grid sx={{ minWidth: '375px' }}>
        <Component {...pageProps} />
      </Grid>
    </projectsContext.Provider>
  );
}
export default MyApp;
