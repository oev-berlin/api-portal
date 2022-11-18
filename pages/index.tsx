import React, {useCallback, useMemo} from 'react';
import fs from 'fs';
import path from 'path';
import {Header} from '../meta/Header';
import {Column} from '../components/Column';
import {MainPageInnerContainer, MainPageOuterContainer, MainPageTitle} from '../styles/pages/main/styles';
import {projectData, filterBy} from '../utils/interfaces';
import {docType} from "../utils/types";

interface AppProps {
    projectsData: projectData[]
}

export default function App({projectsData}: AppProps) {
    const data = useMemo(() => projectsData, [projectsData]);
    const filterProjects = useCallback((type: docType) => {
        return filterBy(data, type)
    }, [data]);

    return (
        <>
            <Header/>
            <MainPageOuterContainer>
                <MainPageTitle>Swagger API</MainPageTitle>
                <MainPageInnerContainer container>
                    <Column projects={filterProjects("backend")} name="Backend" key="backend"/>
                    <Column projects={filterProjects("microservice")} name="Microservices" key="microservices"/>
                </MainPageInnerContainer>
            </MainPageOuterContainer>
        </>
    );
}

export async function getStaticProps() {
    const projectsFiles = fs.readdirSync('./public/apis_docs/').filter((file) => path.extname(file) === '.json');
    const projectsData: JSON[] = projectsFiles.map((projectFile) => {
        try {
            const projectData = fs.readFileSync(path.join('./public/apis_docs/', projectFile));
            const projectDataJSON: JSON = JSON.parse(projectData.toString());
            return projectDataJSON;
        } catch (err) {
            return err;
        }
    });

    return {
        props: {
            projectsData,
        },
    };
}
