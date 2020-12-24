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
    
    :hover {  
        
    }
`;