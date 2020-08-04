import React, { Component } from "react";
import styled from "styled-components";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Toolbar from '../../components/Navigation/Toolbar';
import { Route } from 'react-router-dom';
import NotePad from '../../containers/Notes/NotePad';

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
    this.props.history.goBack();
  };

  addInputHandler = () => {
    this.props.history.replace('/notes/NotePad/index.html 200!')
  };

  render() {
    return (
      <Container>
        <Img2
          onClick={this.goBackHandler}
          src="./assets/keyboard_backspace-24px.svg"
          alt="new"
        />
        <Toolbar 
        click={this.sideDrawerOpenHandler}
        gotoInput={this.addInputHandler}
        />
        <SideDrawer
          goBackButton={this.goBackHandler}
          closed={this.sideDrawerCloseHandler}
          openState={this.state.showSideDrawer}
        />
        <Route 
        path={this.props.match.path + '/NotePad'}
        render={(props) => (<NotePad  />)}
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

const Img2 = styled.img`
  position: absolute;
  width: 48px;
  height: 45px;
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

export default Notes;
