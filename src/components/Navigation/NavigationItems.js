import React from 'react';
import NavigationItem from './NavigationItem';

const navigationItems = (props) => (
    <ul>
        <NavigationItem exact link="/NotePad"> + </NavigationItem>
    </ul>
);

export default navigationItems;