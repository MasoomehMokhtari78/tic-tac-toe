import React from 'react'
import Board from '../Board'
import {calculateWinner} from '../../helper'
import {Container, Typography, Button, Box} from '@mui/material'
class Singleplayer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true
      };
    }
    
    makeMove(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return Promise.resolve();
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      const nextState = {
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      };
      // return a promise and updates states
      return new Promise((resolve, reject) => {
        this.setState(nextState, resolve);
      });
    }
  
    async handleClick(i) {
      //waits for the promise before going to the next line
      await this.makeMove(i);

      const squares = this.state.history[this.state.stepNumber].squares.slice();
      const bestSquare = findBestSquare(squares, this.state.xIsNext ? "X" : "O");
      if (bestSquare !== -1) {
        await this.makeMove(bestSquare); 
      }
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      const moves = history.map((step, move) => {
        const destination = move ? `Go to move #${move}` : "Go to Start"
        return(
          <Typography sx={{fontSize:"5vw"}}>
          <li key={move} style={{ listStyleType : "none", marginLeft: -10}}>
              <Button onClick={() => this.jumpTo(move)}>{destination}</Button>
          </li>
      </Typography>
        )
      });
  
      let status;
      if (winner) {
        status = "Winner: " + winner;
      }
      else if (isBoardFilled(current.squares)) {
        status = "It's a Tie!";
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
  
      return (
        <Container
            sx={{
                    
                display:'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
        <Typography variant="h1" fontFamily='"Segoe UI"' 
        sx={{padding: 2,
             margin:5,
             fontSize:"min(12vw, 100px)",
             
             borderBottom: "3px black solid"}}>
          Singleplayer
        </Typography>
          
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
        <Box
                sx={{
                    display: 'flex',
                }}
            >
                <div>
                <Typography variant="h4" fontFamily='"Segoe UI"' sx={{fontSize:"min(5vw, 25px)"}}>History</Typography>
                    {moves}
                </div>
                <Typography variant="h5" fontFamily='"Segoe UI"' sx={{ marginLeft: 5, fontSize:"min(5vw, 25px)"}}>
                    {status}
                </Typography>
                
            </Box>
        </Container>
      );
    }
}

function isBoardFilled(squares) {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        return false;
      }
    }
    return true;
}

function findBestSquare(squares, player) {
    const opponent = player === 'X' ? 'O' : 'X';
    
    const minimax = (squares, isMax) => {
      const winner = calculateWinner(squares);
      if (winner === opponent) return { square: -1, score: -1 };
      if (isBoardFilled(squares)) return { square: -1, score: 0 };
      const best = { square: -1, score: isMax ? -1000 : 1000 };
      for (let i = 0; i < squares.length; i++) {
        if (squares[i]) {
          continue;
        }
        squares[i] = isMax ? player : opponent;
        const score = minimax(squares, !isMax).score;
        squares[i] = null;
  
        if (isMax) {
          if (score > best.score) {
            best.score = score;
            best.square = i;
          }
        } else {
          if (score < best.score) {
            best.score = score;
            best.square = i;
          }
        }
      }
      return best;
    };
    
    return minimax(squares, true).square;
}



export default Singleplayer

