import { useState } from 'react'
import Card from '../components/RockPaperScissors/Card'

export default function RockPaperScissors() {
  const [gameState, setGameState] = useState<{playerMove: string, computerMove: string}>({playerMove: "", computerMove: ""})
  const setPlayerMove = (playerMove: string): void => {
    const rand = Math.floor(Math.random() * 3)
    const computerMove = rand === 0 ? "Rock"
      : rand === 1 ? "Paper"
      : "Scissors"
    setGameState({playerMove, computerMove})
  }

  return (
    <>
      <div>
        <h1>Rock Paper Scissors</h1>
        <p>Welcome to the Rock Paper Scissors game!</p>
        <p>Choose your move and see if you can beat the computer!</p>
      </div>
      {gameState.playerMove ? 
        <div>{gameState.playerMove} - {gameState.computerMove}</div> 
      : null}
      <div className="flex">
        <Card move="Rock" onClick={() => setPlayerMove("Rock")} />
        <Card move="Paper" onClick={() => setPlayerMove("Paper")} />
        <Card move="Scissors" onClick={() => setPlayerMove("Scissors")} />
      </div>
    </>
  )
}