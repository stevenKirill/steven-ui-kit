import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import classes from './accordion.module.css';

// цвета
const COLORS_CONSTANTS = {
    BLUE: '#236bdf',
    RED: '#e45327',
    YELLOW: '#c8e42c',
    GREEN: '#76DC8C',
};

// иконки
const ICONS_CONSTANTS = {
    PLUS: 'PLUS',
    ARROWS: 'ARROWS'
};

/** Компоннет аккордион */
const Accordion = ({
    data,
    openedDefaultIndex = 1,
    color = 'BLUE',
    icon = 'PLUS'
}) => {

    const [selected,setSelected] = useState(openedDefaultIndex - 1);

    const selectItem = (i) => {
        if (selected === i) {
            return setSelected(null)
        } 
        setSelected(i)
    };

    let component = null;

    if (data.length === 0) {
        throw new Error('передайте массив')
    };

    const renderIcons = (i) => {
        let iconComponents = null;
        if (icon === ICONS_CONSTANTS.PLUS) {
            
            iconComponents = (
                <FontAwesomeIcon
                    icon={selected === i ? faMinus : faPlus}
                    size="s"
                    color={'#c8d4e7'}
                    className={classes.pointer}
                />
            )
        } else if (icon === ICONS_CONSTANTS.ARROWS) {
            iconComponents = (
                <FontAwesomeIcon
                    icon={selected === i ? faArrowDown : faArrowUp}
                    size="s"
                    color={'#c8d4e7'}
                    className={classes.pointer}
                />
            )
        };
        return iconComponents;
    };

    if (data.length > 0) {
        component = data.map((item,id) => {
            const { title, description } = item;
            const detectClass = selected === id ? `${classes.description} ${classes.show}` : `${classes.description}`;
            return (
                <div 
                    key={`${title}_${description[0]}_${id}`} 
                    className={classes.item}
                    style={{backgroundColor: COLORS_CONSTANTS[color]}}
                    onClick={() => selectItem(id)}
                >
                    <div className={classes.title}>
                        <span>{title}</span>
                        {renderIcons(id)}
                    </div>
                    <div 
                        className={detectClass}
                    >
                            {description}
                    </div>
                </div>
            )
        });
    };

    return component;
};

export default Accordion
