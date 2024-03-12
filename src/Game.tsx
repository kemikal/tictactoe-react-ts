import React from 'react';
import Square from "./Square"

interface Props {
    board: string[];
    handleClick(index: number): void;
}

function Game(props: Props) {

    const { board, handleClick} = props;

    const styles = {
        board: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            width: "300px"
        }
    }

    console.log("game", board);
    

    return (
        <div style={styles.board}>
            {board.map((value, index) => {
                return <Square value={value} key={index} index={index} handleClick={handleClick}  />
            })}
        </div>
    );
}

export default Game;