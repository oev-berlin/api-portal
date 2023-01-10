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

export { MainPageInnerContainer, MainPageOuterContainer};