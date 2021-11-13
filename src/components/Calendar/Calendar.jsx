import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { isToday, isBeforeToday, isSelected } from './utils';
import classes from './calendar.module.css';
import moment from 'moment';
import buildInitialCalendar from './utils';

/**
 * Компонент кадендаря.
 */
const Calendar = ({ clickHandler }) => {
    const [calendar,setCalendar] = useState([]);
    const [currentDay,setCurrentDay] = useState(moment());
    const [selectedDay, setSelectedDay] = useState(moment());
    const dayOfweek = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

    useEffect(() => {
        setCalendar(buildInitialCalendar(currentDay));
    },[currentDay]);

    useEffect(() => {
        // Тут может быть какая то кастомная функция которая будет открыать что то
        // какой то компонент и получать выбранную дату.
        clickHandler(selectedDay.format("DD/MM/YY"));
    },[selectedDay])

    /** Обработчик перехода назад */
    const handleGoBack = () => {
        setCurrentDay(currentDay.clone().subtract(1,"month"));
    };

    /** Обработчик перехода назад */
    const handleGoForward = () => {
        setCurrentDay(currentDay.clone().add(1,"month"));
    };
    
    /** Обработчик нажатия на день */
    const handlePickDate = (day) => {
        if (isBeforeToday(day)) {
            return
        } else {
            setSelectedDay(day);
        }
    };

    /** Текущий месяц */
    const currentMonth = () => {
        return currentDay.format("MMMM");
    };

    /** Текущий год */
    const currentYear = () => {
        return currentDay.format("YYYY");
    };

    /**
     * Функция определения стилей
     */
    const defineStyle = (day) => {
        if (isToday(day)) return `${classes.today}`;
        if (isBeforeToday(day)) return `${classes.before}`;
        if (isSelected(day, selectedDay)) return `${classes.selected}`
        return `${classes.after}`
    };

    return (
        <div className={classes.calendar}>
            <div className={classes.header}>
                <div onClick={handleGoBack} className={classes.left}>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        size="s"
                        color={'#76DC8C'}
                    />
                </div>
                <div className={classes.month}>
                    {currentMonth()}/{currentYear()}
                </div>
                <div onClick={handleGoForward} className={classes.right}>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        size="s"
                        color={'#76DC8C'}
                        className="pointer"
                    />
                </div>
            </div>
            <div className={classes.weekday}>
                {dayOfweek.map(weekDay => {
                    return (
                        <div>{weekDay}</div>
                    )
                })}
            </div>
            <div className={classes.body}>
                {
                    calendar.map(week => {
                        return (
                            <div className={classes.week}>
                                {week.map(day => {
                                    return (
                                        <div
                                            className={`${classes.day} ${defineStyle(day)}`} 
                                            onClick={() =>  handlePickDate(day)}>
                                            {day.format('D')}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Calendar;
