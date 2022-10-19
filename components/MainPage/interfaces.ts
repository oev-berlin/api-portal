type docType = "backend" | "microservice";

interface projectData {
    id: string,
    name: string,
    description: string,
    swaggerInformation: object,
    docsType: docType,
    microservices: string[],
    externalServices: string[]
}

interface columnData {
    name: string,
    projects: JSON[]
}

export {projectData, columnData};

