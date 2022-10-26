import {Grid} from "@mui/material";
import {Card} from "../Card";
import {ColumnContainer, ColumnTitle} from "./styles";
import {columnData} from "./interfaces";
import {projectData} from "../../utils/interfaces";

export const Column = ({projects,name}:columnData ) => {

    return (
        <ColumnContainer xs={12} md={6} item container>
            <Grid xs={10} item>
                <ColumnTitle>
                    {name}
                </ColumnTitle>
            </Grid>
            <Grid item xs={10}>
                {
                    projects.map((project:projectData) =>
                        (
                            <Card
                                projectData={project}
                                key={project.id}
                            />
                        )
                    )
                }
            </Grid>
        </ColumnContainer>);
}