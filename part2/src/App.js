import "./App.css"



const Course = ({ course }) => {
	return (
		<>
			<h4>{course.name}</h4>
			<ul>
				{course.parts.map(part => {
					return (
						<li key={part.id}>
							<h5>{part.name}</h5>

							<h5>{part.exercises}</h5>
						</li>
					)
				})}
			</ul>
		</>
	)
}


const App = () => {
	const course = {
		id: 1,
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
				id: 1
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
				id: 2
			},
			{
				name: 'State of a component',
				exercises: 14,
				id: 3
			},
			{
				name: 'State of a component',
				exercises: 14,
				id: 4
			}
		]
	}

	return (
		<div className="App">
			<Course course={course} />
		</div>
	)
}

export default App
