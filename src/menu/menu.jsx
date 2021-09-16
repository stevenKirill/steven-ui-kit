import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './menu.module.css';

const menu = () => {
    return (
        <div className={classes.menu} style={{ display: 'flex', flexDirection: 'column' }}>
        <NavLink activeClassName={classes.active} to="/drop-down">DropDown</NavLink>
        <NavLink activeClassName={classes.active} to="/calendar">Calendar</NavLink>
        <NavLink activeClassName={classes.active} to="/date-picker">DatePicker</NavLink>
        <NavLink activeClassName={classes.active} to="/range-slider">RangeSlider</NavLink>
        <NavLink activeClassName={classes.active} to="/five-stars">FiveStars</NavLink>
        <NavLink activeClassName={classes.active} to="/switch">Switch</NavLink>
        <NavLink activeClassName={classes.active} to="/tooltip">Tooltip</NavLink>
        <NavLink activeClassName={classes.active} to="/slider">Slider</NavLink>
        <NavLink activeClassName={classes.active} to="/accordion">Accordion</NavLink>
        <NavLink activeClassName={classes.active} to="/notification">Notification</NavLink>
        <NavLink activeClassName={classes.active} to="/progress-bar">Progress bar</NavLink>
    </div>
    );
};

export default menu
