import "./App.css"

import { useState } from 'react'

const Button = ({ handler, value }) => {
  return (
    <>
      <button onClick={handler}>
        {value}
      </button>
    </>
  )
}

const Display = ({ text, value }) => {
  if (text === 'Positive') {
    return (
      <tr>
        <td><h4>{text}</h4></td>
        <td><h4>{value}%</h4></td>
      </tr>
    )
  }
  return (
    <>
      <tr>
        <td><h4>{text}</h4></td>
        <td><h4>{value}</h4></td>
      </tr>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 & neutral === 0 & bad === 0) {
    return (
      <div><h4>No Feedback Given</h4></div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Display text='Good' value={good} />
          <Display text='Neutral' value={neutral} />
          <Display text='Bad' value={bad} />
          <Display text='All' value={bad + neutral + good} />
          <Display text='Average' value={((bad * -1) + good) / (bad + neutral + good)} />
          <Display text='Positive' value={good / (bad + neutral + good) * 100} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)


  const handlebad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  return (
    <div className="App">
      <h1>Give your FeedBack</h1>
      <Button handler={handleGood} value="Good" />
      <Button handler={handleNeutral} value="Neutral" />
      <Button handler={handlebad} value="Bad" />


      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App