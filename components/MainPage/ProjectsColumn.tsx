import {Grid, Typography} from "@mui/material";
import {ProjectCard} from "./ProjectCard";
import {columnData, projectData} from "./interfaces";

export const ProjectsColumn = (columnData: columnData) => {
    return (
        <Grid item container justifyContent={"center"} xs={5.5} border={1}>
            <Grid item xs={10} sx={{p: 2, mt: 2}}>
                <Typography variant={"h5"} textAlign={"center"}>
                    {columnData.name}
                </Typography>
            </Grid>
            <Grid item xs={10}>
                {
                    columnData.projects.map((project:projectData) =>
                        (
                            <ProjectCard
                                projectData={project}
                                key={project.id}
                            />
                        )
                    )
                }

            </Grid>
        </Grid>);
}