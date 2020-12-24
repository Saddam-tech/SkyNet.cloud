import React from "react"; 
import Layout from "./containers/Layout/Layout";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Notes from "./containers/Notes/Notes";
import { connect } from 'react-redux';
import * as actions from './store/actions/actions';
import Signup from './components/Signup/Signup';

const App = (props) => {
  const { isAuth } = props;
  return (
    <div className="App">
      <Switch>
        <Route path="/Signup" component={Signup} />
        {isAuth && <Route path="/notes" component={Notes} />}
        <Route path="/" exact component={Layout} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: true
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.checkAuthTimeout())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
