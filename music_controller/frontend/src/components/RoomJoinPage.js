import React, { useState } from 'react';
import { TextField, Button, Grid, Typography} from "@mui/material"
import { Link } from "react-router-dom";

const JoinRoomPage = (props) => {

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
         const requestOptions = {
            mathod: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                code: state.roomCode
            })
         }

         fetch('/api/join-room', requestOptions).then((response) => {
            if (response.ok){
                props.history.push(`/room/${state.roomCode}`)
            }
            else {
                setState({
                    error: "Room not found",
                })
            }
         })
         .catch((error) => {
            console.log(error);
         })
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