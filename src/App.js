import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const secondsToWait = 1;
    axios(`https://httpstat.us/200?sleep=${secondsToWait * 1000}`).then(
        response => {
          setLoaded(true);
        }
    );
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {loaded ? (
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  rel="noopener noreferrer"
              >
                Learn React
              </a>
          ) : null}
        </header>
      </div>
  );
}

export default App;