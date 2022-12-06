import React from 'react';
import { ListItem, TextField } from '@mui/material';

import { useRouter } from 'next/router';
import { ComboBoxProps } from './interfaces';
import { StyledAutocomplete } from './styles';

export default function ComboBox({ searchOptions }: ComboBoxProps) {
  const router = useRouter();
  function handelClick(projectTitle:string) {
    router.push(`/project/${projectTitle}`);
  }

  return (
    <StyledAutocomplete
      disablePortal
      options={searchOptions}
      renderOption={(props, option) => {
        const projectTitle: string = option as string;
        return (
          <ListItem
            {...props}
            key={projectTitle}
            onClick={() => handelClick(projectTitle)}
          >{projectTitle}
          </ListItem>
        );
      }}
      renderInput={(props) => <TextField {...props} label="Project" />}
    />
  );
}
