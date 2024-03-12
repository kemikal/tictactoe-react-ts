import React, { useEffect } from 'react';
import {useState } from "react";

interface Props {
    handleStart(players: string[]): void;
}

function Start(props: Props) {

    const {handleStart} = props;

    const [players, setPlayers] = useState(["", ""]);

    const handleInput = (event: any, index: number) => {
        const newPlayers = [...players];
        newPlayers.splice(index, 1, event.target.value)
        setPlayers(newPlayers);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        handleStart(players)
    }

    return (
        <div>
            <h1>Start</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={players[0]} onInput={(e) => handleInput(e, 0)} /><br/>
                <input type="text" value={players[1]} onInput={(e) => handleInput(e, 1)} /><br/>
                <button>Spara</button>
            </form>
        </div>
    );
}

interface Props {

}

export default Start;