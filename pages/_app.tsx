import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import {Grid} from "@mui/material";


function MyApp({ Component, pageProps }: AppProps) {
  return <Grid sx={{minWidth:"375px"}}> <Component {...pageProps} /></Grid>;
}

export default MyApp;
