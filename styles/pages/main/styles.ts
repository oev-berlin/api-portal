import styled from "styled-components";
import {Box, Grid} from "@mui/material";

const MainPageOuterContainer = styled(Box)`
  flex-grow: 1;
  margin: 2rem;
`;

const MainPageInnerContainer = styled(Grid)`
  flex-direction: column;
  @media only screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const MainPageTitle = styled.h1`
  text-align: center;
  padding-left: 0.5rem;
  margin-bottom: 5rem;
`;

export {MainPageTitle, MainPageInnerContainer, MainPageOuterContainer};