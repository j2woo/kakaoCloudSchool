import React, { Component } from "react";
import MyComponent from "../../react_component2/src/MyComponent";
import EventPractice from "../../react_component2/src/EventPractice";

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent />
        <MyComponent />
      </div>
    );
  }
}

export default App;
