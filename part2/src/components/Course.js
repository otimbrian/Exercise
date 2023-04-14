import Exercise from './Exercise'
import Display from './Display'

const Course = ({ course }) => {
	return (
		<>
			<h4>{course.name}</h4>
			<ul>
				<Display parts={course.parts} />

				<Exercise parts={course.parts} />
				<hr />
			</ul>
		</>
	)
}

export default Course
