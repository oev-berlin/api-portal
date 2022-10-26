import {CardActionArea, Grid, Button} from '@mui/material';
import {Microservice} from "./fragments";
import {CardOuterContainer, CardTitle, CardInnerContainer} from "./styles";
import {projectData} from "../../utils/interfaces";

export const Card = ({projectData}: projectData) => (
    <CardOuterContainer>
        <CardActionArea component={Button} sx={{textTransform:"none"}}>
                <CardTitle>
                    {projectData.name}
                </CardTitle>
            <CardInnerContainer container spacing={2}>
                {
                    projectData.microservices.map((microserviceName: string) =>
                        (
                            <Microservice
                                serviceName={microserviceName}
                                key={microserviceName}
                            />
                        )
                    )}
            </CardInnerContainer>
        </CardActionArea>
    </CardOuterContainer>

);