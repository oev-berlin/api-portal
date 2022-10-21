import {Card, CardContent, CardActionArea, Grid, Typography, Button} from '@mui/material';
import {projectData} from './interfaces';
import {Microservice} from "./Microservice";

export const ProjectCard = ({projectData}: projectData) => (
    <Card sx={{m: 2}}>
        <CardActionArea component={Button}>
            <CardContent>
                <Typography variant={"h6"} color="text.primary">
                    {projectData.name}
                </Typography>
            </CardContent>
            <Grid container spacing={2} sx={{p: 1}}>
                {
                    projectData.microservices.map((microservice: string) =>
                        (
                            <Microservice
                                serviceName={microservice}
                                key={{microservice}}
                            />
                        )
                    )}
            </Grid>
        </CardActionArea>
    </Card>

);