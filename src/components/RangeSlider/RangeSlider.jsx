import React, { useRef, useState, useEffect } from 'react';
import classes from './rangeSlider.module.css';

/**
 * Компонент слайдера
 */
const RangeSlider = ({
    maxValue = 70,
    minValue = 0,
    className = '',
    withTooltip = false
}) => {
    const [showTooltip,setShowTooltip] = useState(false);
    const [min,setMin] = useState(minValue);
    const [max,setMax] = useState(maxValue);
    const [circleWidth,setCircleWidth] = useState('');
    const left = useRef(null);
    const right = useRef(null);
    const bar = useRef(null);
    const container = useRef(null);
    
    useEffect(() => {
        const { width: containerWidth } = container.current.getBoundingClientRect();
        const val = 20 * 100 / containerWidth;
        setCircleWidth(val);
    },[]);
    // TODO логика если кружочки касаються друг друга
    const moveLeft = (e) => {
        const {
            left: leftContainerBound,
            right: rightContainerBound,
            width: containerWidth
        } = container.current.getBoundingClientRect();
        const { clientX } = e;
        if (clientX <= leftContainerBound) {
            left.current.style.left = '0%';
            bar.current.style.width = max - min - circleWidth + '%';
            bar.current.style.left = circleWidth + '%';
            setMin(0);
            return
        } else {
            const val = (clientX - leftContainerBound) * 100 / containerWidth;
            left.current.style.left = val + '%';
            setMin(val.toFixed(0));
        }
    };
    // TODO логика если кружочки касаються друг друга
    const moveRight = (e) => {
        const {
            left: leftContainerBound,
            right: rightContainerBound,
            width: containerWidth
        } = container.current.getBoundingClientRect();

        const { clientX } = e;
        if (clientX >= rightContainerBound) {
            right.current.style.left = '100%';
            bar.current.style.width = 100 - min + '%';
            setMax(100);
            return;
        } else {
            const val = (clientX - leftContainerBound) * 100 / containerWidth;
            right.current.style.left = val  + '%';
            setMax(val.toFixed(0));
        }
    };

    const startDragLeft = (e) => {
        document.addEventListener('mousemove', moveLeft);
        document.addEventListener('mouseup',stopDragLeft);
    };

    const startDragRight = (e) => {
        document.addEventListener('mousemove',moveRight);
        document.addEventListener('mouseup',stopDragRight);
    };

    const stopDragRight = () => {
        document.removeEventListener('mousemove',moveRight);
        document.removeEventListener('mouseup',stopDragRight);
    };

    const stopDragLeft = () => {
        document.removeEventListener('mousemove',moveLeft);
        document.removeEventListener('mouseup',stopDragLeft);
    };

    return (
        <>
            <div ref={container} className={`${className} ${classes.wrapper}`}>
                <div className={classes.rangeInner}>
                    <span
                        ref={left}
                        className={classes.circleLeft}
                        onMouseDown={startDragLeft}
                        style={{
                            left: `${min}%`
                        }}
                    ></span>
                    <span
                        className={classes.progress}
                        ref={bar}
                        style={{
                            left: `${Number(min) + circleWidth}%`,
                            width: `${Number(max - min) - circleWidth}%`
                        }}
                    ></span>
                    <span
                        ref={right}
                        style={{
                            left: `${max}%`
                        }}
                        className={classes.circleRigth}
                        onMouseDown={startDragRight}
                    ></span>
                </div>
            </div>
            <div className={classes.ranges}>
                <div>Min: {min}%</div>
                <div>Value: {`${(max-min).toFixed(0)}`}%</div>
                <div>Max: {max}%</div>
            </div>
        </>
    );
};

export default RangeSlider;
