import {projectData} from "./interfaces";
import fs from "fs";
import path from "path";

export function fetchProjectsData(): projectData[] {
    const projectsFiles = fs.readdirSync('./public/apis_docs/').filter(file => path.extname(file) === '.json');
    const projectsData: projectData[] = projectsFiles.map((projectFile:string):any => {
        try {
            const projectsDataString = fs.readFileSync(path.join('./public/apis_docs/', projectFile));
            const projectsData: projectData = JSON.parse(projectsDataString.toString());
            return projectsData;
        } catch (err) {
            return err;
        }
    });
    return projectsData;
}

