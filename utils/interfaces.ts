import {docType} from "./types";
import { JsonValue } from "type-fest";

export interface projectInfo {
    title: string,
    description: string,
    type: docType,
    microservices: string[],
    externalservices: string[]
}

export interface projectData {
    swagger?:string,
    info: projectInfo,
    definitions?: JsonValue,
    paths?: JsonValue,
}

