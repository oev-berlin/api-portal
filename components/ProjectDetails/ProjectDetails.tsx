import {ProjectTitleContainer, DescriptionContainer, DescriptionTextContainer} from "./styles";
import {projectData} from "../../utils/interfaces";

export const ProjectDetails = ({project}: { project: projectData }) => {
    return (
        <>
            <ProjectTitleContainer> {project.name} </ProjectTitleContainer>
            <DescriptionContainer>Description</DescriptionContainer>
            <DescriptionTextContainer>{project.description}</DescriptionTextContainer>
        </>
    );
}