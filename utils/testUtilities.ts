import {ProjectData} from "./interfaces";
import {docType} from "./types";

export const createProjectData = (
    {
        title = "Test Project",
        description = "Description",
        type = "microservice",
        microservices= ["PDF Service", "Email Service"],
        externalservices= ["WRZ Rechner"],

    }: {
        title?: string,
        description?: string,
        type?: docType,
        microservices?: string[],
        externalservices?: string[],
    }
): ProjectData => (
     {
         swagger: "2.0",
         info: {
             title,
             description,
             type,
             microservices,
             externalservices,
         },
         definitions: {},
         paths: {},
    });

export const filterBy = (data: ProjectData[], docType: string): ProjectData[] => data.filter((projectData: ProjectData) => projectData.info.type === docType)
