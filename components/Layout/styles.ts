import styled from 'styled-components';
import { Toolbar } from '@mui/material';

export const Title = styled.h1`
    font-weight: bold;
`;

export const StyledToolBar = styled(Toolbar)`
  position: static;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  flex-grow: 1;
  justify-content: space-around;
`;
