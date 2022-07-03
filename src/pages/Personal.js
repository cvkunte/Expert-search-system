
   
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';

export default function Personal() {
  const {firstname, setFirstname} = useContext(LoginContext)
  const {lastname, setLastname} = useContext(LoginContext)
  const {city, setCity} = useContext(LoginContext)


  const handleCity = (event) => {
    setCity(event.target.value);
    console.log("Coming in handle event",firstname, lastname, city)
  };

  const changeFirstname = (event) => {
    setFirstname(event.target.value);
  }; 
  const changeLastname = (event) => {
    setLastname(event.target.value);
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={firstname}
            onChange={changeFirstname}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            defaultValue={lastname}
            onChange={changeLastname}

          />
        </Grid>
        <Grid item xs={12}>
        <Box sx={{ paddingTop:2, minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select current work location</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                label="city"
                onChange={handleCity}
                defaultValue={city}
                >
                <MenuItem value={"Indianapolis"}>Indianapolis</MenuItem>
                <MenuItem value={"Branchburg"}>Branchburg</MenuItem>
                <MenuItem value={"Cambridge"}>Cambridge</MenuItem>
                <MenuItem value={"New York"}>New York</MenuItem>
                <MenuItem value={"San Deigo"}>San Deigo</MenuItem>
                <MenuItem value={"Washington"}>Washington</MenuItem>
                
                </Select>
            </FormControl>
        </Box>
        </Grid>
      </Grid>

    </React.Fragment>
  );
}