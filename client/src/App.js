import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "/"
    };
  }

  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <a to="/"> MERN </a>
            </li>
          </ul>
          <ul>
            <li>
              <a to="/">Items</a>
            </li>
            addItem
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
