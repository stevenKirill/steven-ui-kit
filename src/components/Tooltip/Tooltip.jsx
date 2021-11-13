import React, { useState, useEffect, useRef, cloneElement } from 'react';
import { TOOLTIP_POSITIONS } from './constants';
import classes from './tooltip.module.css';



/** Контент тултипа */
const TooltipContent = ({ content, position, additionalClass = '', coords }) => {
    const tooltipEl = useRef(null);

    useEffect(() => {
        const { current } = tooltipEl;
        if (current) {
            if (position === TOOLTIP_POSITIONS.TOP) {
                current.style.left = `${coords.left - current.clientWidth / 2}px`;
                current.style.top = `${coords.top - current.clientHeight}px`;
                current.style.transform = `translateY(-50%) scale(1)`;
            } else if (position === TOOLTIP_POSITIONS.BOTTOM) {
                current.style.left = `${coords.left - current.clientWidth / 2}px`;
                current.style.top = `${coords.top + current.clientHeight}px`;
                current.style.transform = `translateY(-50%) scale(1)`;
            } else if (position === TOOLTIP_POSITIONS.LEFT) {
                current.style.left = `${coords.left - current.clientWidth / 2}px`;
                current.style.top = `${coords.top + current.clientHeight / 2}px`;
                current.style.transform = `translateY(-50%) scale(1)`;
            } else if (position === TOOLTIP_POSITIONS.RIGHT) {
                current.style.left = `${coords.left - current.clientWidth / 2 + 10}px`;
                current.style.top = `${coords.top + current.clientHeight / 2}px`;
                current.style.transform = `translateY(-50%) scale(1)`;
            }
            current.style.opacity = 1;
        };

    },[]);

    return (
        <div
            className={`${classes.common} ${classes[additionalClass]}`}
            ref={tooltipEl}>
                {content}
        </div>
    )
};

/** Компонент tooltip */
const Tooltip = ({ position, children, content }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const [tooltipClass,setTooltipClass] = useState('');

    const getElementPosition = (e) => {
        const coords = e.target.getBoundingClientRect();
        if (position === TOOLTIP_POSITIONS.TOP) {
            setTooltipClass(TOOLTIP_POSITIONS.TOP);
            setCoords({
                top: coords.top + window.scrollY,
                left: coords.left + (coords.width / 2) + window.scrollX 
            });
        } else if (position === TOOLTIP_POSITIONS.BOTTOM) {
            setCoords({
                top: coords.bottom + window.scrollY,
                left: coords.left + (coords.width / 2) + window.scrollX, 
            });
            setTooltipClass(TOOLTIP_POSITIONS.BOTTOM);

        } else if (position === TOOLTIP_POSITIONS.RIGHT) {
            setCoords({
                top: coords.top + window.scrollY,
                left: coords.right + (coords.width / 2) + window.scrollX, 
            });
            setTooltipClass(TOOLTIP_POSITIONS.RIGHT);

        } else if (position === TOOLTIP_POSITIONS.LEFT) {
            setCoords({
                top: coords.top + window.scrollY,
                left: coords.left - (coords.width / 2) + window.scrollX, 
            });
            setTooltipClass(TOOLTIP_POSITIONS.LEFT);
        }
        setShowTooltip(true);
    };

    return (
        <>
            {showTooltip && 
            <TooltipContent
                content={content}
                position={position}
                coords={coords}
                additionalClass={tooltipClass}
            />
            }
            {cloneElement(children, {
                ...children.props,
                onMouseOver: getElementPosition,
                onMouseLeave: () => setShowTooltip(false)
            })}
        </>
    );
};

export default Tooltip
