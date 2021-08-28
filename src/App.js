import './App.css';
import Code from './Components/Elements/Code.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="title">Lesson Tester</h1>
        <h3 id="author">
          by{' '}
          <a id="jake" href="https://github.com/jakeroggenbuck">
            Jake Roggenbuck
          </a>
        </h3>

        <Code code='print("Hello Simba!")' />
      </header>
      <a href="https://github.com/JakeRoggenbuck/lesson-tester">Source</a>
    </div>
  );
}

export default App;
