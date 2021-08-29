import React, { useEffect, useRef, useState } from 'react';
import classes from './slider.module.css';

/** Компонент слайдер с одним thumb */
const Slider = ({ rangeValue = 50 }) => {
    const [range,setRange] = useState(rangeValue);
    const [thumbWidth,setThumbWidth] = useState(0);
    const [containerValues, setContainerValues] = useState({});
    const [showTooltip,setShowTooltip] = useState(false);
    const thumb = useRef(null);
    const rail = useRef(null);
    const track = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        const { current } = thumb;
        const { current: wrapper } = container;
        const coords = wrapper.getBoundingClientRect();
        setContainerValues(coords);
        setThumbWidth((current.clientWidth / 2) * 100 / coords.width);
    },[]);

    const startDragging = () => {
        document.addEventListener('mousemove',move);
        document.addEventListener('mouseup',stopDragging);
    };

    const stopDragging = () => {
        document.removeEventListener('mousemove',move);
        document.removeEventListener('mouseup',stopDragging);
        setShowTooltip(false);
    };

    const move = e => {
        const { clientX } = e;
        if ( clientX <= containerValues.left) {
            setRange(0);
        } else if (clientX >= containerValues.right) {
            setRange(100);
        } else {
            setRange(((clientX - containerValues.left) * 100 / containerValues.width).toFixed(2));
            setShowTooltip(true);
        }
    };

    const toggleTooltip = () => {
        setShowTooltip(prev => !prev);
    };

    return (
        <div className={classes.wrapper} ref={container}>
            <div style={{ display: 'flex', width: '100%', height: '100%', }}>
                <span 
                    className={classes.track}
                    ref={track}
                    style={{ width: `${range}%` }}
                />
                <span 
                    className={classes.rail}
                    ref={rail}
                    style={{ width: `${100 - range}%` }}
                />
            </div>
            <span
                style={{ left: `${range - thumbWidth}%` }}
                className={classes.thumb}
                ref={thumb}
                onMouseDown={startDragging}
                onMouseEnter={toggleTooltip}
                onMouseLeave={toggleTooltip}
            >
                {showTooltip && <span className={classes.tooltip}>
                    <span>{Number(range).toFixed(0)}</span>
                </span>}
            </span>
        </div>
    );
};

export default Slider
