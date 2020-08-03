import React from 'react';
import classes from './Burger.module.css';


const burger = (props) => (
    <div className={classes.Burger} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default burger;