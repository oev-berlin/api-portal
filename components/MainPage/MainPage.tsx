import {Box, Grid} from '@mui/material';
import {projects, microservices} from "./Data";
import ComboBox from "./ComboBox";
import {ProjectsColumn} from "./ProjectsColumn";

const ComoBoxOptions:string[] = projects.map((project:JSON) => {return JSON.stringify(project)})

export const MainPage = () => {
    //Dinge zu beachten fuer Cobobox
    // im render, condtionell darstellen, welches projekt angezeigt wird.
    // in der combobox ein inputfield,
    // state wird nicht in combo handeln, main page.
    // pruefen wenn state laenge 0, dann zeige alle, wenn >1 dann zeige nur das was gewuenscht.
    // array von allen microscerces, darunter dann den namen filtern.
    return (
        <>
        <ComboBox options={ComoBoxOptions} />
        <Box sx={{flexGrow: 1, m: "2rem"}}>
            <Grid container justifyContent={"space-between"}>
                <ProjectsColumn key={"Backend"} name={"Backend"} projects={projects}/>
                <ProjectsColumn key={"Microservices"} name={"Microservices"} projects={microservices}/>
            </Grid>
        </Box>
        </>

    )
};