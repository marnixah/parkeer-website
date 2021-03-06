import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Grid, Paper, TextField, Button, InputAdornment } from '@material-ui/core';
import GooglemapsButton from './googlemapsButton';
import { addParkingSlot } from '../functions';
import { parkingslot } from '../interfaces';

function ParkingSlotAddField() {
  const [licenseplate, setLicenseplate] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{padding: "1rem"}}
    >
      <Grid item xs={11}>
        <Paper >
          <TextField
            label="Nummerplaat"
            variant="outlined"
            style={{margin: "1rem", width: "20rem"}}
            value={licenseplate}
            required
            onChange={(event) => { setLicenseplate(event.target.value) }}
          />
          <TextField
            label="Locatie"
            variant="outlined"
            style={{margin: "1rem", maxWidth: "20rem"}}
            value={location}
            required
            onChange={(event) => { setLocation(event.target.value) }}
            InputProps={{
              endAdornment:
              <InputAdornment position="end">
                <GooglemapsButton />
              </InputAdornment>
            }}
          />
          <TextField
            id="startTime"
            label="Start tijd parkeren"
            type="datetime-local"
            style={{margin: "1rem"}}
            value={startTime}
            required
            onChange={(event) => { setStartTime(event.target.value) }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="endTime"
            label="Eind tijd parkeren"
            type="datetime-local"
            style={{margin: "1rem"}}
            value={endTime}
            required
            onChange={(event) => { setEndTime(event.target.value) }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" color="primary" style={{margin:"1rem", float: "right"}} onClick={() => {
            let parkingSlot: parkingslot = {
              startTime: new Date(startTime).getTime(),
              endTime: new Date(endTime).getTime(),
              licensePlate: licenseplate,
              location: location,
              id: Math.round(Math.random() * 100000)
            };
            addParkingSlot(parkingSlot);
          }}>parkeren</Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ParkingSlotAddField;