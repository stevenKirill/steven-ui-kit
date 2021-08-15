import React, { useEffect, useRef } from 'react';
import classes from './switch.module.css';

/** Компонент switch */
const Switch = ({ isToggled, onToggle, isRounded = false }) => {
    const checkbox = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        const { current: checkBoxNode  } = checkbox;
        const { current: containerNode } = container;
        if (isToggled) {
            checkBoxNode.classList.add(classes.animate);
            containerNode.classList.add(classes.dark);
        } else {
            checkBoxNode.classList.remove(classes.animate);
            containerNode.classList.remove(classes.dark);
        };
    },[isToggled]);

    return (
        <>
        <label
            className={`${classes.switch} ${isRounded ? classes.rounded : ''} `}
            ref={container}>
            <input
                type="checkbox"
                checked={isToggled}
                onChange={() => onToggle(prev => !prev)}
            />
            <span
                className={`${classes.slider} ${isRounded ? classes.circle : ''}`}
                ref={checkbox}
            />
        </label>
        {
            isToggled ? 
            <div className={classes.marginTop}>On</div>
            : <div className={classes.marginTop}>Off</div>
        }
        </>
    );
};

export default Switch;
