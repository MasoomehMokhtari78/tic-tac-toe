import React, {useState} from 'react'
import Board from '../Board'
import {calculateWinner} from '../../helper'
import {Container, Typography, Button, Box} from '@mui/material'
export default function Multiplayer() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])
    const xO = xIsNext ? "X" : "O"

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1)
        const current = historyPoint[stepNumber]
        const squares = [...current]
        if (winner || squares[i]) return;
        squares[i] = xO
        setHistory([...historyPoint, squares])
        setStepNumber(historyPoint.length)
        setXisNext(!xIsNext)
    }

    const jumpTo = (step) => {
        setStepNumber(step)
        setXisNext(step % 2 === 0)
    }
    const renderMoves = () => 
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : "Go to Start"
            return(
                <Typography sx={{fontSize:"5vw"}}>
                    <li key={move} style={{ listStyleType : "none", marginLeft: -10}}>
                        <Button onClick={() => jumpTo(move)}>{destination}</Button>
                    </li>
                </Typography>
                
            )
        })
    const historyPoint = history.slice(0, stepNumber + 1)
    const current = historyPoint[stepNumber]
    const squares = [...current]
    let status;
    if (winner) {
        status = "Winner: " + winner;
    }
    else if (isBoardFilled(squares)) {
        status = "It's a Tie!";
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return (
        <Container
            sx={{
                
                display:'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#DAF3F5'
            }}
        >
            <Typography variant="h1" fontFamily='"Segoe UI"'
             sx={{padding: 2,
                 margin:5,
                 fontSize:"min(12vw, 100px)",
                 borderBottom: "3px black solid",
                 }}>
                 Multiplayer
            </Typography>
            <Board squares={history[stepNumber]} onClick={handleClick}></Board>
            <Box
                sx={{
                    display: 'flex',
                    backgroundColor: '#DAF3F5'
                }}
            >
                <div>
                <Typography variant="h4" fontFamily='"Segoe UI"' sx={{fontSize:"min(5vw, 25px)"}}>History</Typography>
                    {renderMoves()}
                </div>
                <Typography variant="h5" fontFamily='"Segoe UI"' sx={{ marginLeft: 5, fontSize:"min(5vw, 25px)"}}>
                    {status}
                </Typography>
                
            </Box>
        </Container>
    )
}

function isBoardFilled(squares) {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        return false;
      }
    }
    return true;
}