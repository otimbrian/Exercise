import "./App.css"
import Course from "./components/Course"



const App = ({course}) => {

	return (
		<div className="App">
			<Course course={course} />
		</div>
	)
}

export default App
