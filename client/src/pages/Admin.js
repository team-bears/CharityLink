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
 * Admin Panel Page -> domain.com/admin/
 */
class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Particles className="particles" params={ParticleOptions()} />
          <LoginBoxFs text="Charity Link Project Admin Panel" />
        </header>
      </div>
    );
  }
}

export default AdminPanel;
