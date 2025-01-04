import logo from './logo.svg'
import './App.css'
import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'
import DataFetchingComponent from './components/DataFetchingComponent'

function App() {
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
      </header>
      <>
        <h2>Controlled Component</h2>
        <ControlledForm />
        <h2>Uncontrolled Component</h2>
        <UncontrolledForm />
        <h2>Data Fetching Component</h2>
        <DataFetchingComponent />
      </>
    </div>
  )
}

export default App
