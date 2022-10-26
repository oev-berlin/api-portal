import {CardActionArea, Grid, Button} from '@mui/material';
import {Microservice} from "./fragments";
import {ProjectContainer, ProjectTitle} from "./styles";
import {projectData} from "../../utils/interfaces";

export const ProjectCard = ({projectData}: projectData) => (
    <ProjectContainer>
        <CardActionArea component={Button} sx={{textTransform:"none"}}>
                <ProjectTitle>
                    {projectData.name}
                </ProjectTitle>
            <Grid container spacing={2} sx={{p:1, flexWrap: "wrap"}}>
                {
                    projectData.microservices.map((microserviceName: string) =>
                        (
                            <Microservice
                                serviceName={microserviceName}
                                key={microserviceName}
                            />
                        )
                    )}
            </Grid>
        </CardActionArea>
    </ProjectContainer>

);