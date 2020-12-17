import React, { Component } from "react";
import axios from "../../axios/axios";
import classes from "./SideDrawer.module.css";
import styled from "styled-components";
//import { withRouter } from "react-router-dom";
import BackDrop from "../BackDrop/BackDrop";
import Aux from "../../containers/hoc/Aux/Aux";
import FetchedNote from "../../containers/FetchedNotes/FetchedNote";
import Spinner2 from "../Spinner/Spinner2";
import { Exit } from "@styled-icons/icomoon/";

class SideDrawer extends Component {
  state = {
    notes: [],
    loading: true,
    notesLoaded: true
  };

  componentDidMount() {
      axios
      .get("/inputData.json")
      .then((res) => {
        const fetchedNotes = [];
        for (let key in res.data) {
          fetchedNotes.push({
            ...res.data[key],
            id: key,
          });
        }

        this.setState({
          notesLoaded: false,
          loading: false,
          notes: fetchedNotes,
        });

        console.log("Data has been fetched!");
      });
    }
  
 

  render() {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (this.props.openState) {
      attachedClasses = [classes.SideDrawer, classes.Open];
    }

    let fetchedNotes = (
      <div>
        {this.state.notes.map((anote) => (
          <FetchedNote key={anote.id} notes={anote.userNote} />
        ))}
      </div>
    );

    if (this.state.loading) {
      fetchedNotes = <Spinner2 />;
    }

    return (
      <Aux>
        <BackDrop show={this.props.openState} closing={this.props.closed} />

        <div className={attachedClasses.join(" ")}>
          <Input placeholder="Search" />

          <StyledExit onClick={this.props.goBackButton} />

          <div className={classes.FetchedNotes}>{fetchedNotes}</div>
        </div>
      </Aux>
    );
  }
}

const Input = styled.input`
  position: absolute;
  width: 441px;
  height: 61px;
  left: 23px;
  top: 30px;
  text-align: center;
  font-size: 25px;

  background: #faf4ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  @media (max-width: 500px) {
    width: 184px;
    height: 36px;
    left: 17px;
    top: 25px;
  }
  ::placeholder {
    text-align: center;
    position: absolute;
    width: 290px;
    height: 47px;
    left: 73px;
    top: 42px;

    font-family: Angkor;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 37px;

    color: #9b9b9b;
  }
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

export default SideDrawer;
