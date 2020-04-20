import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import logo from './logo.svg';
import './App.css';

import LoginBox from './components/LoginBox';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})

function App() {
  return (
    <ApolloProvider client = {client}>
      <div className="App">
        <header className="App-header">
          <LoginBox/>
          Charity Link Project (initial)
	  <a
            className="App-link"
            href="https://www.highpolarbear.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          High Polar Bear 
          </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
