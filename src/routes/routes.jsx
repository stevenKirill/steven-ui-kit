import React from 'react';
import classes from './routes.module.css';
import { Route } from 'react-router-dom';
import DropDownPage from '../pages/DropDownPage'
import CalendarPage from '../pages/CalendarPage';
import DatePickerPage from '../pages/DatePickerPage';
import RangeSliderPage from '../pages/RangeSlider';
import FiveStarsPage from '../pages/FiveStarsPage';
import SwitchPage from '../pages/SwitchPage';
import TooltipPage from '../pages/TooltipPage';
import SliderPage from '../pages/SliderPage';

const routes = () => {
    return (
        <div className={classes.wrapper}>
            <Route path="/drop-down" exact component={DropDownPage}/>
            <Route path="/calendar" component={CalendarPage}/>
            <Route path="/date-picker" component={DatePickerPage}/>
            <Route path="/range-slider" component={RangeSliderPage}/>
            <Route path="/five-stars" component={FiveStarsPage}/>
            <Route path="/switch" component={SwitchPage}/>
            <Route path="/tooltip" component={TooltipPage}/>
            <Route path="/slider" component={SliderPage}/>
        </div>
    );
};

export default routes
