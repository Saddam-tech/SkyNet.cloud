import React, { Component } from "react";
import styled from "styled-components";
import Icons from "../../components/icons/Icons";

class Notes extends Component {
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
      </div>
    );
  }
}

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
