import {CardActionArea, Button} from '@mui/material';
import {Microservice} from "./fragments";
import {CardOuterContainer, CardTitle, CardInnerContainer} from "./styles";
import {projectData} from "../../utils/interfaces";
import Link from "next/link";

export function Card({projectData}: projectData){

    return (
        <Link href={"/project/" + projectData.id}>
        <CardOuterContainer>
            <CardActionArea component={Button} sx={{textTransform: "none"}}>
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
        </Link>);
};