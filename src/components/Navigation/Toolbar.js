//////so today I have to get started from doing the route to the notePad class based component,
////// then making a Toolbar and Css of it combined all in one Toolbar css(navigation all stuff).
import React from 'react';
import Burger from '../Burger/Burger'
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Burger clicked={props.click} />
    </header>
);

export default toolbar;