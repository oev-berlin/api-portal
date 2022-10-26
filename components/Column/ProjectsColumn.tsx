import {Grid} from "@mui/material";
import {ProjectCard} from "../Card";
import {ColumnContainer, ColumnTitle} from "./styles";
import {columnData} from "./interfaces";
import {projectData} from "../../utils/interfaces";

export const ProjectsColumn = ({projects,name}:columnData ) => {

    return (
        <ColumnContainer xs={12} md={5.5} item container>
            <Grid xs={10} item>
                <ColumnTitle>
                    {name}
                </ColumnTitle>
            </Grid>
            <Grid item xs={10}>
                {
                    projects.map((project:projectData) =>
                        (
                            <ProjectCard
                                projectData={project}
                                key={project.id}
                            />
                        )
                    )
                }
            </Grid>
        </ColumnContainer>);
}