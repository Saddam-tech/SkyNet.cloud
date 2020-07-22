import React from "react";
import classes from "./SideDrawer.module.css";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import BackDrop from "../BackDrop/BackDrop";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.openState) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    (<BackDrop show={props.openState} closing={props.closed} />),
    (
      <div className={attachedClasses.join(" ")}>
        <Img2
          onClick={props.goBackButton}
          src="./assets/keyboard_backspace-24px.svg"
          alt="new"
        />
      </div>
    )
  );
};

const Img2 = styled.img`
position: absolute;
width: 48px;
height: 45px;
left: 17px;
top: 839px; 

:hover {
background: #ffffff;
`;

export default withRouter(SideDrawer);
