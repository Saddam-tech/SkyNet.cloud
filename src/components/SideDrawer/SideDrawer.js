import React from "react";
import styled from "styled-components";
import BackDrop from '../BackDrop/BackDrop';


const SideDrawer = (props) => {
  let attachedStyles = [Drawer, Closed];

  if (props.openState) {
    attachedStyles = [Drawer, Open];
  }

  return (
    <BackDrop show={props.openState} closing={props.closed}>
      <div className={attachedStyles.join(' ')}></div>
    </BackDrop>
  );
};

const Drawer = styled.div`
  position: absolute;
  width: 506px;
  height: 900px;
  left: 0px;
  top: 0px;
  z-index: 200;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  background: #397c9b;
`;

const Closed = styled.div`
  transform: translateX(-100%);
`;

const Open = styled.div`
  transform: translateX(0);
`;

export default SideDrawer;
