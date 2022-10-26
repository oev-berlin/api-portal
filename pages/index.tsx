import {Header} from "../meta/Header";
import React, {useMemo} from "react";
import fs from "fs";
import path from "path";
import {ProjectsColumn} from "../components/Column";
import {MainPageInnerContainer, MainPageOuterContainer, MainPageTitle} from "../styles/pages/main/styles";
import {projectData} from "../utils/interfaces";

interface AppProps{
    projectsData: projectData[]
}

export default function App({projectsData}: AppProps){
    const data = useMemo( () => projectsData, [projectsData])
    const microservices: projectData[] = data.filter((obj:projectData) => {
        return obj.docsType === "microservice";
    } );
    const backendProjects: projectData[] = data.filter((obj:projectData) => {
        return obj.docsType === "backend";
    } );
    return(
        <>
            <Header/>
            <MainPageOuterContainer xs={12}>
                <MainPageTitle>Swagger API</MainPageTitle>
                <MainPageInnerContainer container>
                    <ProjectsColumn projects={backendProjects} name={"Backend"} key={"backend"}/>
                    <ProjectsColumn projects={microservices}  name={"Microservices"} key={"microservices"}/>
                </MainPageInnerContainer>
            </MainPageOuterContainer>
        </>
     )
};

export async function getStaticProps(){
    const projectsFiles =  fs.readdirSync('./public/apis_docs/').filter(file => path.extname(file) === '.json');
    const projectsData:JSON[] = projectsFiles.map(projectFile => {
        try{
            const projectData = fs.readFileSync(path.join("./public/apis_docs/", projectFile));
            const projectDataJSON : JSON = JSON.parse(projectData.toString());
            return projectDataJSON;}
        catch (err){
            console.log(err);
        }
    });

     return {
        props: {
            projectsData
        }
    }
}




