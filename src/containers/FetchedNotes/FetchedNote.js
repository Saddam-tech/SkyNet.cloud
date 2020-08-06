import React from 'react';
import classes from './FetchedNote.module.css';

const fetchedNote = (props) => {

    const fetchedData = [];

    for (let NoteData in props.notes) {
        fetchedData.push({
            name: NoteData,
            value: props.notes[NoteData]
        })
    };

    const NotesOutPut = fetchedData.map((notess) => {
        return(
            <span 
            key={notess.name}
            style={{
                textTransform: "capitalize",
                display: 'inline-block',
                margin: '0 8px',
                padding: '5px'
            }}>
                {notess.name}: {notess.value}
            </span>
        )
    } )


    return(
        <div className={classes.FetchedNote}>
            {NotesOutPut}
        </div>
    );
}

export default fetchedNote;