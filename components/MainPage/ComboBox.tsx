import {Autocomplete, TextField} from "@mui/material";
import {projects} from "./Data";

export default function ComboBox (options:string[]){
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{maxWidth:0.5, mx: "auto", my:4}}
            renderInput={(params) => <TextField {...params} label="Project"/>}
        />);
}
