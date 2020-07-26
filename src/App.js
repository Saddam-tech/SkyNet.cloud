import React from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Notes from "./containers/Notes/Notes";

function App() {
  return (
    <div className="App">
       
      <Switch>
    
        <Route path="/notes" component={Notes} />
        <Route path="/" exact component={Layout} />
    
        <Redirect to="/" />
    </Switch>
    </div>
  );
}

export default App;
