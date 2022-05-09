import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
      <Grid container lg={12}>
        <Grid item xs={12} sm={12} md={4} lg={12}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={12} md={4}  lg={12}>
            <TextField id="filled-basic" label="Filled" variant="filled" />
        </Grid>
        <Grid item xs={12} sm={12} md={4}  lg={12}>
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </Grid>
      </Grid>
  );
}
