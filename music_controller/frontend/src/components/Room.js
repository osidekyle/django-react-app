import React, { useEffect, useState } from "react";
import { Grid, Button, Typography } from "@mui/material"

const Room  = ({match}) => {
    const [roomCode, setRoomCode] = useState(match.params.roomCode)
    const initialState = {
        votesToSkip: 2,
        guestCanPause: false,
        isHost: false
    }
    const [roomData, setRoomData] = useState(initialState)


    useEffect(() => {
        fetch('/api/get-room?code=' + roomCode)
        .then((res) => res.json()) 
        .then((data) => {
            setRoomData(
                {
                    votesToSkip: data.votes_to_skip,
                    guestCanPause: data.guest_can_pause,
                    isHost: data.is_host
                }
            )
        }, [roomCode, setRoomData])
    })

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography variant="h6" component="h6">
                    Code: {roomCode}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="h6" component="h6">
                    Votes: {roomData.votesToSkip}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="h6" component="h6">
                    Guest Can Pause: {roomData.guestCanPause}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="h6" component="h6">
                    Host: {roomData.isHost}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" href="/">
                    Leave Room
                </Button>
            </Grid>
        </Grid>
    )
}

export default Room;