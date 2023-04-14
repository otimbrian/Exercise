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

				<h5>This part has <b>{course.parts.reduce((sum, part) => {
					return sum += part.exercises
				}, 0)}</b></h5>
			</ul>
		</>
	)
}

export default Course