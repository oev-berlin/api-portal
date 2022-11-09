import React from 'react';
import {projectData} from "../../utils/interfaces";
import fs from "fs";
import path from "path";

export async function getStaticPaths() {
    const projectsFiles = fs.readdirSync('./public/apis_docs/').filter(file => path.extname(file) === '.json');
    const projectsData: JSON[] = projectsFiles.map(projectFile => {
        try {
            const projectData = fs.readFileSync(path.join("./public/apis_docs/", projectFile));
            const projectDataJSON: JSON = JSON.parse(projectData.toString());
            return projectDataJSON;
        } catch (err) {
            console.log(err);
        }
    });

    const paths = projectsData.map((project) =>{
        return{
            params:{id: project["id"]}
        }
    })
    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    }
}
export const getStaticProps = async (context) => {
    const projectsFiles = fs.readdirSync('./public/apis_docs/').filter(file => path.extname(file) === '.json');
    const projectsData: projectData[] = projectsFiles.map(projectFile => {
        try {
            const projectData = fs.readFileSync(path.join("./public/apis_docs/", projectFile));
            const projectDataJSON: projectData = JSON.parse(projectData.toString());
            return projectDataJSON;
        } catch (err) {
            console.log(err);
        }
    });
    const foundProject:projectData = projectsData.find((project:projectData)=> project.id == context.params.id);
    return{
        props: {finalProject: foundProject}
    }
}

export default function App({finalProject}:{finalProject: projectData}) {
    return (<>
        <h1>{finalProject.name}</h1>
        <h1>{finalProject.description}</h1>
        <h1>{finalProject.externalServices}</h1>
        <h1>{finalProject.microservices}</h1>
    </>);
}
