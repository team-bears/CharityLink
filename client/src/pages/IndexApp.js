// React
import React from "react";

// Particles
import Particles from "react-particles-js";
import ParticleOptions from "../components/ParticleOptions";

// CSS
import "../css/App.css";

// Components
import LoginBoxFs from "../components/LoginBoxFs";

/**
 * Index Page -> domain.com/
 */
class IndexApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Particles className="particles" params={ParticleOptions()} />
          <LoginBoxFs text="Charity Link Project (initial)" />
        </header>
      </div>
    );
  }
}

export default IndexApp;
