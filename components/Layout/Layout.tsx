import React from 'react';
import { ComboBox } from '../ComboBox';
import { LayoutProps } from './interfaces';
import { StyledToolBar, Title } from './styles';

export const Layout = ({ searchOptions, children }: LayoutProps) => (
  <>
    <StyledToolBar>
      <Title>Swagger API</Title>
      <ComboBox searchOptions={searchOptions} />
    </StyledToolBar>
    {children}
  </>
);
