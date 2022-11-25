import {docType} from "./types";
import { JsonValue } from "type-fest";

export interface ProjectInfo {
    title: string,
    description: string,
    type: docType,
    microservices: string[],
    externalservices: string[]
}

export interface ProjectData {
    swagger?:string,
    info: ProjectInfo,
    definitions?: JsonValue,
    paths?: JsonValue,
}

export interface ProjectProps {
    id: string,
    projectsData: ProjectData[]
}

