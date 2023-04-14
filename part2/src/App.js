import { useState } from 'react'
import "./App.css"


const Button = ({ handler, value }) => {
  return (
    <>
      <button onClick={handler}>
        {value}
      </button>
    </>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0))

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
  }

  const handleVote = () => {
    var copy = [ ...votes ]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div className='App'>
      <h4>{anecdotes[selected]}</h4>
      <p>Has {votes[selected]} votes.</p>
      <Button handler={handleVote} value="Vote" />
      <Button handler={handleNext} value="Next Anectode" />

      <h2>Anectode With the Heighest Number of Votes</h2>
      <h4>{anecdotes[votes.indexOf(Math.max(...votes))]}</h4>
      <h6>This has {Math.max(...votes)} Votes</h6>
    </div>
  )
}

export default App