import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import { ContextProps, projectsContext } from '../context/ProjectsContext';
import { ProjectData } from '../utils/interfaces';

function MyApp({ Component, pageProps }: AppProps):JSX.Element {
  const [projects, setProjects] = useState<ProjectData[]>([]);
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
