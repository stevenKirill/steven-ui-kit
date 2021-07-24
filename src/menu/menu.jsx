import React from 'react';
import { Link } from 'react-router-dom';
import classes from './menu.module.css';

const menu = () => {
    return (
        <div className={classes.menu}>
        <Link to="/drop-down">DropDown</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/date-picker">DatePicker</Link>
        <Link to="/range-slider">RangeSlider</Link>
    </div>
    );
};

export default menu
