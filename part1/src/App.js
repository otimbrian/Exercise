import "./App.css"

const Header = ({ course }) => {
  return (
    <>
      <h1>{course} </h1>
      <br />
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      <h3>{parts[0].name} {parts[0].exercises}</h3>
      <h3>{parts[1].name} {parts[1].exercises}</h3>
      <h3>{parts[2].name} {parts[2].exercises}</h3>
    </>
  )
}

const Total = ({ parts }) => {
  return (
    <>
      <p>{parts[2].exercises + parts[1].exercises + parts[0].exercises}</p>
    </>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div className="App">
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
