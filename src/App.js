// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";

// COMPONENTS
import Home from "./pages/home/Home";

// HOOKS
import { useConfigI18n } from "./hooks";

function App() {
  useConfigI18n();

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
