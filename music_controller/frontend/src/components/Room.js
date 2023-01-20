import React, { useEffect, useState } from "react";

const Room  = ({match}) => {
    const [roomCode, setRoomCode] = useState(match.params.roomCode)
    const initialState = {
        votesToSkip: 2,
        guestCanPause: false,
        isHost: false
    }
    const [roomData, setRoomData] = useState(initialState)


    // useEffect(() => {
    //     fetch('/api/get-room?code=' + roomCode)
    //     .then((res) => res.json()) 
    //     .then((data) => {
    //         setRoomData(
    //             {
    //                 votesToSkip: data.votes_to_skip,
    //                 guestCanPause: data.guest_can_pause,
    //                 isHost: data.is_host
    //             }
    //         )
    //     }, [roomCode, setRoomData])
    // })

    return (
        <div>
            <h3>{roomCode}</h3>
            <p>Votes: {roomData.votesToSkip}</p>
            <p>Guest can pause: {roomData.guestCanPause.toString()}</p>
            <p>Host: {roomData.isHost.toString()}</p>
        </div>
    )
}

export default Room;