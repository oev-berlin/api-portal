import {ProjectData} from "./interfaces";
import fs from "fs";
import path from "path";

export function fetchProjectsData(): ProjectData[] {
    const projectsFiles = fs.readdirSync('./public/apis_docs/').filter(file => path.extname(file) === '.json');
    const projectsData: ProjectData[] = projectsFiles.map((projectFile:string):any => {
        try {
            const projectsDataString = fs.readFileSync(path.join('./public/apis_docs/', projectFile));
            const projectsData: ProjectData = JSON.parse(projectsDataString.toString());
            return projectsData;
        } catch (err) {
            return err;
        }
    });
    return projectsData;
}

