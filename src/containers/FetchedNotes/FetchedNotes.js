import React, { Component } from 'react';
import axios from '../../axios/axios';
import FetchedNote from './FetchedNote';
import classes from './FetchedNotes.module.css';
import Spinner from '../../components/Spinner/Spinner';



class FetchedNotes extends Component {
    
    state = {
        notes: [],
        loading: true
    }

    componentDidUpdate() {
        axios.get('/inputData.json')
    .then((res) => {
        const fetchedNotes = [];
        for (let key in res.data) {
            fetchedNotes.push({
                ...res.data[key],
               id: key
            })
        };

        this.setState({loading: false, notes: fetchedNotes});

        console.log('Data has been fetched!');


    })
    };
     
    
    
    render() {

        let fetchedNotes = (<div>
            {this.state.notes.map(anote => (
                <FetchedNote
                    key={anote.id}
                    notes={anote.userNote}
                    />
            ))}
        </div>);

        if (this.state.loading) {
            fetchedNotes =  <Spinner />
        }

        return(
            <div className={classes.FetchedNotes}>
                 {fetchedNotes}
            </div>
        );
    }
};

export default FetchedNotes;
