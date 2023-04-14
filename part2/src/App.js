import './App.css'
import Course from './components/Course'

const App = ({ courses }) => {
	return (
		<div className='App'>
			{courses.map(course => {
				return (
					<Course key={course.id} course={course} />
				)
			})}
		</div>
	)
}

export default App
