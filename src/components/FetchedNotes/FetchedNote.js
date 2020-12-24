import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";
import axios from "../../util/axios";

export const FetchedNote = (props) => {
  const [error, setError] = useState("");

  const removeNote = (id) => {
    axios
      .delete(`/inputData/${id}.json`)
      .then((response) => {
        // status 200 = OK
        if (response.status === 200) {
          props.removeNote(id);
        }
        setError("Note deletion has failed!");
      })
      .catch((error) => {
        // error codes 500 = internal server error | 401 && 400 = unauthorized | 404 = Not found
        setError("Note deletion has failed!");
      });
  };

  return (
    <Wrapper key={props.id}>
        <p style={{backgroundColor: "red", color: "white"}}>{error ? error : null }</p>
      {props.note} <DeleteIcon onClick={() => removeNote(props.id)} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  border-radius: 5px;
  background: #fff;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
