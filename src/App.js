import "./App.css";
import lightoff from "./img/lightoff.png";
import lighton from "./img/lighton.png";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { isOn: false };
  }

  changeLight() {
    this.setState({ isOn: !this.state.isOn });
  }
  render() {
    const isOnLight = this.state.isOn;
    if (!isOnLight) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
    return (
      <div>
        <img src={isOnLight ? lightoff : lighton} />
        <button onClick={() => this.changeLight()}>
          {isOnLight ? "On" : "Off"}
        </button>
      </div>
    );
  }
}

export default App;
