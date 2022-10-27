import styled from "styled-components";
import {Card, Grid} from "@mui/material";

export const CardTitle = styled.h3`
  text-align: left;
  padding-left: 0.5rem;
  text-transform: none;
`;

export const CardOuterContainer = styled(Card)`
  margin-bottom: 1rem;
`;

export const CardInnerContainer = styled(Grid)`
  padding: 1rem;
  flex-wrap: wrap;
`;
