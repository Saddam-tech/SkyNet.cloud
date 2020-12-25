import React, { useState } from "react";
import styled from "styled-components";
import SideDrawer from "../SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar";
import { Route, withRouter } from "react-router-dom";
import NotePad from "./NotePad";
import { Exit } from "@styled-icons/icomoon/";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import AddBoxIcon from "@material-ui/icons/AddBox"; 

const Notes = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  const goBackHandler = () => {
    props.onLogout();
    props.history.push("/");
  };

  const addInputHandler = () => {
    props.history.replace("/notes/NotePad");
    props.onFalse();
  };

  return (
    <Container>
      <StyledExit onClick={goBackHandler} />
      <Toolbar click={sideDrawerHandler} />

      {props.plus ? (
        <AddBoxIcon
          onClick={addInputHandler}
          style={{ height: "20%", width: "20%" }}
        />
      ) : null}

      <SideDrawer
        goBackButton={goBackHandler}
        closed={sideDrawerHandler}
        open={showSideDrawer}
      />

      <Route
        path={props.match.path + "/NotePad"}
        render={(props) => <NotePad {...props} />}
      />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    plus: state.plus,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.authLogout()),
    onFalse: () => dispatch(actions.minus()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notes));

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
