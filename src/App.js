import React from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Notes from "./containers/Notes/Notes";
import {connect} from 'react-redux';
import * as actions from './store/actions/actions';
import Signup from './components/Signup/Signup';

function App(props) {

  let routes = (
    <Switch>
    <Route path="/Signup" component={Signup} />
    <Route path="/" exact component={Layout} />
    <Redirect to='/' />
    </Switch>
  )
  
  if (props.isAuthenticated) {
    routes = (
      <Switch>
    
        <Route path="/notes" component={Notes} />
        <Route path="/" exact component={Layout} />
    
        <Redirect to="/" />
    </Switch>
    )
  }

  return (
    <div className="App">
       
      {routes}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.checkAuthTimeout())
  }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
