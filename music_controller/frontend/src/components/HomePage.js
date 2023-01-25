import React, { useEffect, useState } from "react";
import JoinRoomPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room"
import { Grid, Button, ButtonGroup, Typography} from "@mui/material"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

const HomePage = () => {
    const initialState = {
        roomCode: null
    }
    const [state, setState] = useState(initialState)

    useEffect(() => {
        fetch('/api/user-in-room')
        .then((response) => response.json())
        .then((data) => {
            setState({
                roomCode: data.code
            })
        })

    }, [])

    const renderHomePage = () => {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12} align="center">
                    <Typography variant="h3" component="h3">
                        House Party
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button color="primary" to="/join" component="Link">
                            Join a Room
                        </Button>
                        <Button color="secondary" to="/create" component="Link">
                            Create a Room
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        );
    }


    return (
        <Router>
            <Switch>
                <Route exact path='/' render={() => {
                    return state.roomCode ? (<Redirect to={`/room/${state.roomCode}`}/>) : renderHomePage()
                }} />
                <Route path='/create' component={CreateRoomPage} />
                <Route path='/join' component={JoinRoomPage} />
                <Route path='/room/:roomCode' component={Room} />
            </Switch>
        </Router>
    )
}

export default HomePage;