import React, { useState } from 'react';
import classes from './datepicker.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Calendar from '../Calendar/Calendar';
import useDetectClickOutside from '../../utils/hooks/useDetectClickOutside';

const DAY = 'day';
const MONTH = 'month';
const YEAR = 'year';
/**
 * Компонент DatePicker.
 */
const DatePicker = () => {
    const [day,setDay] = useState('');
    const [month,setMonth] = useState('');
    const [year,setYear] = useState('');
    const [coords,setCoords] = useState({ x: 0, y: 0 });
    const { ref, isComponentVisible, setIsComponentVisible } = useDetectClickOutside(false);

    const handleOpenCalendar = (e) => {
        setIsComponentVisible(true)
        setCoords({ x: e.clientX, y: e.clientY });
    };

    const getDate = (date) => {
        const parsed = date.split('/');
        const [day,month,year] = parsed;
        const yearAdded = `20${year}`
        setDay(day);
        setMonth(month);
        setYear(yearAdded);
    };

    const handlePressDate = (e) => {
        const { name, value } = e.target;
        const myNumReg = /^[0-9]+$/g;
        if (!myNumReg.test(value) && value !== '') return
        if (name === DAY) {
            // TODO валидация  только чтобы можно было вводить корректрые даты
            setDay(value)

        } else if (name === MONTH) {
            // TODO валидация  только чтобы можно было вводить корректрые месяцы
            setMonth(value)
        } else if (name === YEAR) {
            // TODO валидация  только чтобы можно было вводить корректрые годы
            setYear(value);
        };
    };

    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.inputWrapper}>
                    <input
                        type="text"
                        value={day}
                        maxLength="2"
                        onChange={handlePressDate}
                        name={DAY}
                        className={classes.day}
                    />
                    <div className={classes.dot}>
                        <span>.</span>
                    </div>
                    <input
                        type="text"
                        value={month}
                        onChange={handlePressDate}
                        maxLength="2"
                        name={MONTH}
                        className={classes.month}
                    />
                    <div className={classes.dot}>
                        <span>.</span>
                    </div>
                    <input
                        type="text"
                        value={year}
                        maxLength="4"
                        onChange={handlePressDate}
                        name={YEAR}
                        className={classes.year}
                    />
                </div>
                <div className={classes.icon}>
                    <FontAwesomeIcon
                        icon={faCalendar}
                        size="s"
                        color={'#000'}
                        onClick={handleOpenCalendar}
                        className="pointer"
                    />
                </div>
            </div>
            {isComponentVisible && 
                <div 
                    className={classes.pickerCalendar}
                    ref={ref}
                    style={{
                        top: coords.y + 20 +'px',
                        left: coords.x + 20 + 'px'
                    }}
                >
                    <Calendar clickHandler={getDate}/>
                </div>
            }
        </div>
    );
};

export default DatePicker;
