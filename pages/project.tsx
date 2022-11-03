import React from "react";
import {ProjectDetails} from "../components/ProjectDetails";
import exampleProject from "../public/apis_docs/example_1.json"


export default function Project(){

    return(
        <>
            <ProjectDetails project={exampleProject}/>
        </>
     )
};





