import {createContext, Dispatch} from 'react';
import {ProjectData} from "../utils/interfaces";

export interface ContextProps{
    projects:ProjectData[],
    setProjects: Dispatch<ProjectData[]>|null}
export const projectsContext = createContext<ContextProps>({projects:[], setProjects:null});