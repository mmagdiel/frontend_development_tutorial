import './App.css';
import logo from './logo.svg';

function App() {
  const name = 'Magdiel'; //'Andreina';
  const names = ['Magdiel', 'Andreina'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello {name}</p>
        <ul>
          {names.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
        <div>
          <div className="d-inline">Hola,</div>
          <div className="d-inline">Como estas?</div>
        </div>
      </header>
    </div>
  );
}

export default App;
