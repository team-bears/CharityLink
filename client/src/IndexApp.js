import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import logo from "./logo.svg";
import Particles from "react-particles-js";
import "./css/App.css";

import LoginBoxFs from "./components/LoginBoxFs";
import ParticleOptions from "./components/ParticleOptions";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

function IndexApp() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Particles className="particles" params={ParticleOptions()} />
          <LoginBoxFs text="Charity Link Project (initial)" />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default IndexApp;