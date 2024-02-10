import { useState } from 'react';

function Square({ value, onSquareClick }) {
    // This variable stores information on the state of the square
    // The state is whether it's been clicked
    // If it's clicked then we want to place an X or O
    // depending on the turn

    return (
        <button
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleClick(i) {
        const nextSquares = squares.slice();
        nextSquares[i] = "X";
        setSquares(nextSquares);
    }

    return (
        <>
            <div className="board-row"><>

                <Square id="(0,0)" value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square id="(0,1)" value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square id="(0,2)" value={squares[2]} onSquareClick={() => handleClick(2)} />
            </>
            </div>

            <div className="board-row"><>
                <Square id="(1,0)" value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square id="(1,1)" value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square id="(1,2)" value={squares[5]} onSquareClick={() => handleClick(5)} />
            </>
            </div>

            <div className="board-row"><>
                <Square id="(1,0)" value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square id="(1,1)" value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square id="(1,2)" value={squares[8]} onSquareClick={() => handleClick(8)} />
            </>
            </div>
        </>
    );
}
