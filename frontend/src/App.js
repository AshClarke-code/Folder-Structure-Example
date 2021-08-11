import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';

import Main from "./pages/main/main.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main}/>
      
      </Switch>
    </div>
  );
}

export default App;
