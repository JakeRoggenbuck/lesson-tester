import './App.css';
import Code from './Components/Elements/Code.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="title">Lesson Tester</h1>
        <h3 id="author">by Jake Roggenbuck</h3>

        <Code code="print('hello')" />
      </header>
    </div>
  );
}

export default App;
