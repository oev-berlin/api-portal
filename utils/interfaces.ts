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

