import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import logo from "./logo.svg";
import Particles from "react-particles-js";
import "./css/App.css";
import * as serviceWorker from "./serviceWorker";

import LoginBoxFs from "./components/LoginBoxFs";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

function App() {
  const particlesOptions = {
    particles: {
      number: {
        value: 123,
        density: {
          enable: true,
          value_area: 631.3181133058181
        }
      },
      color: {
        value: "#2307f5"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 3
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 1,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 80.17060304327615,
        color: "#ffffff",
        opacity: 0.3687847739990702,
        width: 0.6413648243462091
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 1200,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Particles className="particles" params={particlesOptions} />
          <LoginBoxFs text="Charity Link Project Admin Panel" />
        </header>
      </div>
    </ApolloProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <IndexApp />
  </React.StrictMode>,
  document.getElementById("root")
);