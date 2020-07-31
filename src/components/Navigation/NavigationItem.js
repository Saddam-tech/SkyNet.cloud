import React from 'react';
import classes from '*.module.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li>
        <NavLink activeClassName={classes.active} exact={props.exact} to={props.Link}> {props.children} </NavLink>
    </li>
);

export default navigationItem;