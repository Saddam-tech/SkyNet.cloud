import React, { Component } from "react";
import styled from "styled-components";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar";
import { Route } from "react-router-dom";
import NotePad from "../../containers/Notes/NotePad";
import { Exit } from "@styled-icons/icomoon/";
import {connect} from 'react-redux';
import * as actions from '../../store/actions/actions';

class Notes extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerOpenHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  componentDidMount() {
    console.log(this.props);
  }

  goBackHandler = () => {
    this.props.onLogout();
    this.props.history.push('/');
  };

  addInputHandler = () => {
    this.props.history.replace("/notes/NotePad");
  };

  render() {
    return (
      <Container>
        <StyledExit onClick={this.goBackHandler} />
        <Toolbar
          click={this.sideDrawerOpenHandler}
          gotoInput={this.addInputHandler}
        />

        {this.state.showSideDrawer ? (
          <SideDrawer
            goBackButton={this.goBackHandler}
            closed={this.sideDrawerCloseHandler}
            openState={this.state.showSideDrawer}
          />
        ) : null}

        <Route
          path={this.props.match.path + "/NotePad"}
          render={(props) => <NotePad />}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: #e8e8e8;
`;

const StyledExit = styled(Exit)`
  position: absolute;
  width: 48px;
  height: 35px;
  left: 17px;
  top: 839px;
  @media (max-width: 500px) {
    width: 31px;
    height: 34px;
    left: 21px;
    top: 754px;
  }

  :hover {
    background: #ffffff;
  }
`;

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.authLogout())
  }
}

export default connect(null, mapDispatchToProps)(Notes);
