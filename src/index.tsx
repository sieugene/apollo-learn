import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const EXCHANGE_RATES_URI = "https://48p1r2roz4.sse.codesandbox.io";
const DOGS_URI = "https://71z1g.sse.codesandbox.io/";

export const client = new ApolloClient({
  uri: DOGS_URI,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
