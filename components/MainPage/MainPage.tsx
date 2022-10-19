import {Box, Grid} from '@mui/material';
import {projects, microservices} from "./Data";
import ComboBox from "./ComboBox";
import {Column} from "./Column";

const ComoBoxOptions:string[] = projects.map((project:JSON) => {return JSON.stringify(project)})

export const MainPage = () => {
    return (
        <div>
        <ComboBox options={ComoBoxOptions}/>

        <Box sx={{flexGrow: 1, m: "2rem"}}>
            <Grid container justifyContent={"space-between"}>
                <Column name={"Backend"} projects={projects}/>
                <Column name={"Microservices"} projects={microservices}/>
            </Grid>
        </Box>
        </div>

    )
};