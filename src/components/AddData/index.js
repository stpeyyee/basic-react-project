import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function AddData({handleAddData}) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
   
    // const handleAddData = (firstName, lastName, email) => {
    //     console.log("data =>", firstName, lastName, email)
    // }

  return (
      <Grid container lg={12}>
        <Grid item xs={12} sm={12} md={4} lg={12}>
            <Typography>{firstName}</Typography>
            <TextField id="firstname" label="Firstname" variant="outlined" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}  lg={12}>
            <TextField id="lastname" label="Lastname" variant="outlined" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}  lg={12}>
            <TextField id="email" label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button onClick={()=>handleAddData(firstName, lastName, email)}>Add Data</Button>
        </Grid>
      </Grid>
  );
}
