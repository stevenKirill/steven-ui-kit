import React from 'react';
import classes from './routes.module.css';
import { Route } from 'react-router-dom';
import DropDownPage from '../pages/DropDownPage'
import CalendarPage from '../pages/CalendarPage';
import DatePickerPage from '../pages/DatePickerPage';
import RangeSliderPage from '../pages/RangeSlider';
import FiveStarsPage from '../pages/FiveStarsPage';

const routes = () => {
    return (
        <div className={classes.wrapper}>
            <Route path="/drop-down" exact component={DropDownPage}/>
            <Route path="/calendar" component={CalendarPage}/>
            <Route path="/date-picker" component={DatePickerPage}/>
            <Route path="/range-slider" component={RangeSliderPage}/>
            <Route path="/five-stars" component={FiveStarsPage}/>
        </div>
    );
};

export default routes
