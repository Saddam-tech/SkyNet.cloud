import React, { useState, useEffect, Fragment } from "react";
import axios from "../../util/axios";
import styled from "styled-components";
import { BackDrop } from "../../util/backdrop";
import { FetchedNote } from "../FetchedNotes/FetchedNote";
import Spinner2 from "../Spinner/Spinner2";
import { Exit } from "@styled-icons/icomoon/";

const SideDrawer = (props) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("done");

    axios.get("/inputData.json").then((res) => {
      let data = [];

      for (let key in res.data) {
        data.push({ ...res.data[key], id: key })
      }

      setNotes(data);
      setLoading(false);
    })
  }, [props.open]);


  return (
    <Fragment>
      <BackDrop show={props.open} closing={props.closed} />
      <Container open={props.open}>
        <StyledExit onClick={props.goBackButton} />
        <div className="FetchedNotes">
          {
            loading ?
              <Spinner2 />
              :
              notes.map(note => <FetchedNote key={note.id} id={note.id} note={note.userNote.note} />)
          }
        </div>
      </Container>
    </Fragment>
  );
}


const Container = styled.div`
    position: fixed;
    width: 500px;
    max-width: 70%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 500; 
    background:  #f3f3f3;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};

    .FetchedNotes {
      width: 90%;
      height: 60%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
      padding: 0;
      margin: 10px;
      margin-top: 110px;
      text-align: center;
      overflow: auto;   
    }
`;

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
