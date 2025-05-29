import { useState } from 'react'
import './App.css'
import Square from './components/Square'

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(""));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const copySq = squares.slice();
    copySq[i] = xIsNext ? 'X' : 'O';
    setSquares(copySq);
    setXIsNext(!xIsNext);
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    status = "Next Player: X";
  }

  const winner = calculateWinner(squares);
  const isAllFull = squares.every(sq => sq !== "");
  const gameover = winner || isAllFull;
  const status = winner ? `Winner: ${winner}` : isAllFull ? "It's a draw" : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">{status}</h1>
      
      <div className='grid grid-cols-3 gap-1'>
        {squares.map((v, i) => (
          <Square key={i} value={v} onSqClick={() => handleClick(i)} />
        ))}
      </div>
      {gameover && <button className='m-5 p-3 border-2' onClick={restart}>Restart</button>}
    </div>
  )
}

export default App

function calculateWinner(squares) {
  const list = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],            
  ];

  for (let i = 0; i < list.length; i++) {
    const [a, b, c] = list[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
