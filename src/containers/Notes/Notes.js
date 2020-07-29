import React, { Component } from "react";
import styled from "styled-components";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Burger from "../../components/Burger/Burger";

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

  render() {
    return (
      <Container>
        <Img2
          onClick={this.goBackHandler}
          src="./assets/keyboard_backspace-24px.svg"
          alt="new"
        />
        <H4>
          <strong>Let`s type something!</strong>
        </H4>

        <Burger click={this.sideDrawerOpenHandler} />
        <SideDrawer
          goBackButton={this.goBackHandler}
          closed={this.sideDrawerCloseHandler}
          openState={this.state.showSideDrawer}
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

const H4 = styled.div`
  position: absolute;
  width: 671px;
  height: 87px;
  left: 534px;
  top: 83px;

  font-family: Angkor;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 55px;

  color: #000000;
  @media (max-width: 500px) {
    width: 369px;
    height: 52px;
    left: 8px;
    top: 265px;
  }
`;

export default Notes;
