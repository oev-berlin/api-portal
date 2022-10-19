import {Grid, Paper} from "@mui/material";


export const Microservice = (serviceName:string)=>{
    return(
<Grid item xs={4}>
    <Paper sx={{textAlign:"center", p:1}}>
        {serviceName}
    </Paper>
</Grid>)};