import {styled} from "@mui/system";
import {Box, Grid} from "@mui/material";

const MainPageOuterContainer = styled(Box)({
    flexGrow: 1,
    margin: "2rem",
});
const MainPageInnerContainer = styled(Grid)({
    flexDirection: "column",
    "@media only screen and (min-width: 900px)": {
        flexDirection: "row",
        justifyContent: "space-between",
    }
});
const MainPageTitle = styled("h1")({
    textAlign: "center",
    paddingLeft: "0.5rem",
    marginBottom: "5rem"
});
export {MainPageTitle};
export {MainPageInnerContainer};
export {MainPageOuterContainer};