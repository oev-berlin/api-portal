import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useCallback, useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import { ContextProps, projectsContext } from '../context/ProjectsContext';
import { ProjectData } from '../utils/interfaces';
import { mapToTitle } from '../utils/testUtilities';
import { Layout } from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps):JSX.Element {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const contextProps:ContextProps = useMemo(() => ({ projects, setProjects }), [projects, setProjects]);
  const getProjectTitles = useCallback(() => mapToTitle(projects), [projects]);

  return (
    <projectsContext.Provider value={contextProps}>
      <Layout searchOptions={getProjectTitles()}>
        <Grid sx={{ minWidth: '375px' }}>
          <Component {...pageProps} />
        </Grid>
      </Layout>
    </projectsContext.Provider>
  );
}
export default MyApp;
