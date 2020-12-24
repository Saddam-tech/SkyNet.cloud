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

    axios.get("/inputData.json").then((res) => {
      let data = [];

      for (let key in res.data) {
        data.push({ ...res.data[key], id: key })
      }

      setNotes(data);
      setLoading(false);
    })
  }, [props.open]);

  const removeNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <Fragment>
      <BackDrop show={props.open} closing={props.closed} />
      <Container open={props.open}>
        <StyledExit onClick={props.goBackButton} />

        {
          loading ?
            <Spinner2 />
            :
            notes.map(note => <FetchedNote
              key={note.id}
              id={note.id}
              note={note.userNote.note}
              removeNote={removeNote}
            />
            )
        }

      </Container>
    </Fragment>
  );
}
 

export default SideDrawer;




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