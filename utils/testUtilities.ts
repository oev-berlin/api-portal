import {projectData, projectInfo} from "./interfaces";
import {docType} from "./types";
import {JsonValue} from "type-fest";

export const createProjectData = (
    {
        title = "Test Project",
        description = "Description",
        type = "microservices",
        microservices= ["PDF Service", "Email Service"],
        externalservices= ["WRZ Rechner"],

    }: {
        title?: string,
        description?: string,
        type?: docType,
        microservices?: string[],
        externalservices?: string[],
    }
): projectData => (
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

export const filterBy = (data: projectData[], docType: string): projectData[] => data.filter((projectData: projectData) => projectData.info.type === docType)
