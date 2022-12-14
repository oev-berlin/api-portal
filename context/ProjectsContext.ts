import {createContext, Dispatch} from 'react';
import {projectData} from "../utils/interfaces";

export interface ContextProps{
    projects:projectData[],
    setProjects: Dispatch<projectData[]>|null}
export const projectsContext = createContext<ContextProps>({projects:[], setProjects:null});