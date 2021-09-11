import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ExchangeRates from "./components/ExchangeRates";
import Dogs from "./components/Dogs";

function App() {
  return (
    <div className="App">
      <Dogs />
      {/* <ExchangeRates /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
