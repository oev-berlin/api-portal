import {Grid, Typography} from "@mui/material";
import {ProjectCard} from "./ProjectCard";
import {columnData} from "./interfaces";

export const Column = (columnData: columnData) => {
    return(
<Grid item container justifyContent={"center"} xs={5.5} border={1}>
    <Grid item xs={10} sx={{p: 2, mt: 2}}>
        <Typography variant={"h5"} textAlign={"center"}>
            {columnData.name}
        </Typography>
    </Grid>
    <Grid xs={10}>
        {
            columnData.projects.map((project) =>
                (
                    <ProjectCard
                        projectData={project}
                    />
                )
            )
        }

    </Grid>
</Grid>);
}