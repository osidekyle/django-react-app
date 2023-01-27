import React, { useEffect, useState } from "react";
import { Grid, Button, Typography } from "@mui/material"

const Room  = (props) => {
    const [roomCode, setRoomCode] = useState(props.match.params.roomCode)
    const initialState = {
        votesToSkip: 2,
        guestCanPause: false,
        isHost: false,
        showSettings: false
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
        getRoomDetails()
    })

    const leaveButtonPressed = () => {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"}
        }
        fetch('/api/leave-room', requestOptions).then((_response) => {
            props.leaveRoomCallback()
            props.history.push("/")
        })
    }

    const getRoomDetails = () => {
        return fetch("/api/get-room?code=" + roomCode)
        .then((response) => {
            if (!response.ok){
                props.leaveRoomCallback()
                props.history.push("/")
            }
            return response.json()
        })
        .then((data) => {
            setRoomData({
                votesToSkip: data.votes_to_skip,
                guestCanPause: data.guest_can_pause,
                isHost: data.is_host
            })
        })
    }

    const updateShowSettings = (value) => {
        setRoomData({
            showSettings: value
        })
    }

    const renderSettingsButton = () => {
        return (
            <Grid item xs={12} align="center">
                <Button variant="contained" color="primary" onClick={() => updateShowSettings(true)}>
                    Settings
                </Button>
            </Grid>

        )
    }

    const renderSettings = () => {
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                
            </Grid>
            <Grid item xs={12} align="center"></Grid>
        </Grid>
    }

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
            { roomData.isHost ? renderSettingsButton() : null }
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" onClick={leaveButtonPressed}>
                    Leave Room
                </Button>
            </Grid>
        </Grid>
    )
}

export default Room;