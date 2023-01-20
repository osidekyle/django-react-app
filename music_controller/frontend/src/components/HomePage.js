import React from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

const HomePage = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'><p>Home page</p></Route>
                <Route path='/create' component={CreateRoomPage} />
                <Route path='/join' component={RoomJoinPage} />
                <Route path='/room/:roomCode' component={Room} />
            </Switch>
        </Router>
    )
}

export default HomePage;