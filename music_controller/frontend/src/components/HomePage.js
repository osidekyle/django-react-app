import React from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
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
                <Route exact path='/'><p>Home room page</p></Route>
                <Route path='/create' component={CreateRoomPage}/>
                <Route path='/join' component={RoomJoinPage}/>
            </Switch>
        </Router>
    )
}

export default HomePage;