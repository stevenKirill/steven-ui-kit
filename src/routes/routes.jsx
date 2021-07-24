import React from 'react';
import classes from './routes.module.css';
import { Link, Route } from 'react-router-dom';
import DropDownPage from '../pages/DropDownPage'
import CalendarPage from '../pages/CalendarPage';
import DatePickerPage from '../pages/DatePickerPage';
import RangeSlider from '../pages/RangeSlider';

const routes = () => {
    return (
        <div className={classes.wrapper}>
            <Route path="/drop-down" exact component={DropDownPage}/>
            <Route path="/calendar" component={CalendarPage}/>
            <Route path="/date-picker" component={DatePickerPage}/>
            <Route path="/range-slider" component={RangeSlider}/>
        </div>
    );
};

export default routes
