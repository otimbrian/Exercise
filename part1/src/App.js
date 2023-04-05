
import './App.css';

const Hello = ({name}) => {
  return (
    <div>
      <p>Hello world {name}</p>
    </div>
  )
}

function App() {
  const now = new Date()
  return (
    <div className="App">
      <p>Hello World {now.toString()}</p>

      <Hello name="Otim" />
    </div>
  );
}

export default App;
