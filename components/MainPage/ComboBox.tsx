import {Autocomplete, TextField} from "@mui/material";

export default function ComboBox(options: string[]) {
    // ToDo: ComboBox Funktionalitaet implementieren.
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{width: 0.5, mx: "auto", my: 4}}
            renderInput={(params) => <TextField {...params} label="Project"/>}
        />);
}
