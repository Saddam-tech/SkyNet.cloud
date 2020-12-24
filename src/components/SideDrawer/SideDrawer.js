import React, { useState, useEffect, Component, Fragment } from "react";
import axios from "../../axios/axios";
import classes from "./SideDrawer.module.css";
import styled from "styled-components";
//import { withRouter } from "react-router-dom";
import BackDrop from "../BackDrop/BackDrop";
import { FetchedNote } from "../../containers/FetchedNotes/FetchedNote";
import Spinner2 from "../Spinner/Spinner2";
import { Exit } from "@styled-icons/icomoon/";

const SideDrawer = (props) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);

    axios.get("/inputData.json").then((res) => {
      let data = [];

      for (let key in res.data) {
        data.push({ ...res.data[key], id: key })
      }

      setNotes(data);
      setLoading(false);
    })
  }, [])

  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.openState) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  console.log(notes);

  return (
    <Fragment>
      <BackDrop show={props.openState} closing={props.closed} />

      <div className={attachedClasses.join(" ")}>
        <Input placeholder="Search" />

        <StyledExit onClick={props.goBackButton} />

        <div className={classes.FetchedNotes}>
          {
            loading ?
              <Spinner2 />
              :
              <div>
                {
                  notes.map(note => <FetchedNote key={note.id} id={note.id} note={note.userNote.note} />)
                }
              </div>
          }
        </div>
      </div>
    </Fragment>
  );
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
