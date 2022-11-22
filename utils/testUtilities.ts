import {projectData} from "./interfaces";
import {docType} from "./types";

export const createProjectData = (
    {
        id = "1",
        name = "Test Project",
        description = "Description",
        swaggerInformation = {},
        docsType = "microservices",
        microservices = ["PDF Service", "Email Service"],
        externalServices = ["WRZ Rechner"],
    }: {
        id?: string,
        name?: string,
        description?: string,
        swaggerInformation?: object,
        docsType?: docType,
        microservices?: string[],
        externalServices?: string[]
    }
): projectData => (
     {
        id,
        name,
        description,
        swaggerInformation,
        docsType,
        microservices,
        externalServices
    });

export const filterBy = (data: projectData[], docType: string): projectData[] => data.filter((projectData: projectData) => projectData.docsType === docType)
