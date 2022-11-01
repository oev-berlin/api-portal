import {docType} from "./types";

export interface projectData {
    id: string,
    name: string,
    description: string,
    swaggerInformation: object,
    docsType: docType,
    microservices: string[],
    externalServices: string[]
}

export const filterBy = (data: projectData[], docType: string): projectData[] => {
    return data.filter((projectData: projectData) => projectData.docsType === docType)
}

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
): projectData => {
    return {
        id: id,
        name: name,
        description: description,
        swaggerInformation: swaggerInformation,
        docsType: docsType,
        microservices: microservices,
        externalServices: externalServices
    };
}