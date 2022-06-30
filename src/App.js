import logo from './logo.svg';
import './App.css';
import { Form1 } from "./formComponents/stepForms";
import { ProgressBar } from './formComponents/progressBar';
import { CarpetCleaningServiceForm, UpholsteryCleaningServiceForm } from "./formComponents/stepForms";

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
        <ProgressBar currentStep={1} recall={null}/>
        <Form1 exit={null} handleClick={null}/>
      </header>
      <CarpetCleaningServiceForm />
      <UpholsteryCleaningServiceForm />
    </div>
  );
}

export default App;
