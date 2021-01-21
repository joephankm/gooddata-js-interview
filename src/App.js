// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";

import Home from "./pages/home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
