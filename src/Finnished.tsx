import React from 'react';

interface Props {
    name: string | null;
    handleRestart(): void;
}

function Finnished(props: Props) {

    const {name, handleRestart} = props;

    return (
        <div>
            <h1>Winner: {name} won the game</h1>

            <button onClick={handleRestart}>Starta om</button>
        </div>
    );
}

interface Props {

}

export default Finnished;