import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from "styled-components";
import axios from "../../util/axios";

const removeNote = (id) => {
    axios.delete(`/inputData/${id}.json`);
}

export const FetchedNote = (props) => <Wrapper key={props.id}>
    {props.note} <DeleteIcon onClick={() => removeNote(props.id)} />
</Wrapper>

const Wrapper = styled.div`
    width: 80%;
    border-radius: 50px;
    background: linear-gradient(145deg, #9f9f9f, #bdbdbd);
    box-shadow: 20px 20px 60px #969696, -20px -20px 60px #cccccc;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
    cursor: pointer;

    
    :hover {
        background-color: #f88686;
        border: 4px solid #40A4C8;
        color: white;
    }
`;