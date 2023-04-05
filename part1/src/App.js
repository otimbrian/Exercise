import "./App.css"

const Header = ({course}) => {
  return (
    <>
      <h1>{course} </h1>
      <br/>
    </>
  )
}

const Content = ({content, exercise}) => {
  return(
    <>
      <h3>{content} {exercise}</h3>
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>{props.x + props.y +props.z}</p>
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div className="App">
      <Header course={course} />
      <Content content={part1} exercise={exercises1} />
      <Content content={part2} exercise={exercises2} />
      <Content content={part3} exercise={exercises3} />
      <Total x={exercises1} y={exercises2} z={exercises3}/>
    </div>
  )
}

export default App
