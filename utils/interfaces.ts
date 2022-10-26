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