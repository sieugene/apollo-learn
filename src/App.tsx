import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import ExchangeRates from "./components/ExchangeRates";
import Dogs from "./components/Dogs";
import { client } from ".";

function App() {
  const onrefetcher = async () => {
    await client.refetchQueries({
      include: "all", // Consider using "active" instead!
    });
  };
  return (
    <div className="App">
      <Dogs />
      <br />
      <button
        onClick={onrefetcher}
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        refetch app
      </button>
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
