import React, { Component } from "react";
import styled from "styled-components";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar";
import { Route } from "react-router-dom";
import NotePad from "../../containers/Notes/NotePad";
import { Exit } from "@styled-icons/icomoon/";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import AddBoxIcon from "@material-ui/icons/AddBox";

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
    // console.log(this.props);
  }

  goBackHandler = () => {
    this.props.onLogout();
    this.props.history.push("/");
  };

  addInputHandler = () => {
    this.props.history.replace("/notes/NotePad");
    this.props.onFalse(); 
  };

  render() {
    return (
      <Container>
        <StyledExit onClick={this.goBackHandler} />
        <Toolbar click={this.sideDrawerOpenHandler} />

        {this.props.plus ?  <AddBoxIcon onClick={this.addInputHandler} style={{height: '20%', width: '20%'}} /> : null}

        {this.state.showSideDrawer ? (
          <SideDrawer
            goBackButton={this.goBackHandler}
            closed={this.sideDrawerCloseHandler}
            openState={this.state.showSideDrawer}
          />
        ) : null}

        <Route
          path={this.props.match.path + "/NotePad"}
          render={(props) => <NotePad {...props} />}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    plus: state.plus,
    loading: state.loading,
  }
}; 

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.authLogout()),
    onFalse: () => dispatch(actions.minus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);



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