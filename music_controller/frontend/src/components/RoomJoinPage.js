import React, { useState } from 'react';
import { TextField, Button, Grid, Typography} from "@mui/material"
import { Link } from "react-router-dom";

const JoinRoomPage = () => {

    initialState = {
        roomCode: "",
        error: ""
    }
    const [state, setState] = useState(initialState)

    const handleTextFieldChange = (e) => {
        setState({
            roomCode: e.target.value,
            eror: state.error
        })
    }

    const roomButtonPressed = () => {
         console.log(state)
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography variant="h4" component="h4">\
                    Join a Room
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <TextField 
                    eror={ state.error }
                    label="Code"
                    placeholder="Enter a Room Code"
                    value={ state.roomCode }
                    helperText={ state.error }
                    variant="outlined"
                    onChange={{handleTextFieldChange}}
                />
            </Grid>
            <Grid item xs={12} align="center">
                <Button variant="contained" color="primary" onClick={roomButtonPressed}>Enter Room</Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button variant="contained" color="secondary" to="/" component={Link}>Back</Button>
            </Grid>
        </Grid>
    )
}

export default JoinRoomPage;