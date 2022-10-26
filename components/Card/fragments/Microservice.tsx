import {Grid} from "@mui/material";
import {MicroserviceContainer} from "./styles";

export const Microservice = ({serviceName}: {serviceName: string }) => {
    return (
        <Grid item xs={12} sm={4} md={6} lg={4}>
            <MicroserviceContainer>
                {serviceName}
            </MicroserviceContainer>
        </Grid>)
};