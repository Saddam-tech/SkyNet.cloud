import React, { Component } from "react";
import styled from "styled-components";
import Icons from "../../components/icons/Icons";
import SideDrawer from '../../components/SideDrawer/SideDrawer';

class Notes extends Component {

  state = {
    showSideDrawer: false
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
      <div>
        <Img src="./assets/NotesBackground.jpg" alt="new" />
        <Img2
          onClick={this.goBackHandler}
          src="./assets/keyboard_backspace-24px.svg"
          alt="new"
        />
        <H4>
          <strong>Let`s type something!</strong>
        </H4>


        <Icons />
        <SideDrawer
          goBackButton={this.goBackHandler}
          closed={this.sideDrawerCloseHandler}
          openState={this.state.showSideDrawer}
        />
        
        <Button2 onClick={this.sideDrawerOpenHandler}>
          Toggle
        </Button2>
      </div>
    );
  }
}

const Button2 = styled.button`
position: absolute;
width: 64px;
height: 52px;
left: 521px;
top: 15px;
background: white;
`;

const Img2 = styled.img`
position: absolute;
width: 48px;
height: 45px;
left: 17px;
top: 839px; 

:hover {
background: #ffffff;
`;

const Img = styled.img`
  position: relative;
  width: 1770px;
  height: 1020px;
  left: 0px;
  top: 0px;
  opacity: 50%;
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
`;

export default Notes;
