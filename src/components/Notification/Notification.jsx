import React, { useState, useEffect} from 'react';
import classes from './notification.module.css';
import { NOTIFICATION_ACTION, NOTIFICATION_TYPES } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';


/** Компонент нотификации */
const Notification = ({ id, type, text, dispatch }) => {
    const [progress,setProgress] = useState(0);
    const [intervalId,setIntervalId] = useState(null);
    const defineClass = () => {
        let notiClass = `${classes.common}`;
        if (type === NOTIFICATION_TYPES.SUCCESS) {
            notiClass += ` ${classes.success}`;
        } else if (type === NOTIFICATION_TYPES.ERROR) {
            notiClass += ` ${classes.error}`;
        } else if (type === NOTIFICATION_TYPES.INFO) {
            notiClass += ` ${classes.info}`;
        } else if (type === NOTIFICATION_TYPES.UNKNOWN) {
            notiClass += ` ${classes.unknown}`;
        }
        return notiClass
    };

    useEffect(() => {
        handleStart();
    },[]);

    useEffect(() => {
        if (progress === 100) {
            handleClose();
        };
    },[progress]);

    const handleStart = () => {
        const id = setInterval(() => {
            setProgress(prev => {
                if (prev < 100) {
                    return prev + 0.5
                } 
                clearInterval(intervalId);
                return prev;
            });
        },[20]);
        setIntervalId(id);
    };

    const handlePause = () => {
        clearInterval(intervalId);
    };
    
    const handleClose = () => {
        dispatch({
            type: NOTIFICATION_ACTION.REMOVE,
            id: id
        });
        clearInterval(id);
    };

    return (
        <div 
            onMouseEnter={handlePause}
            onMouseLeave={handleStart}
            className={defineClass()}
        >
            <span>{text}</span>
            <FontAwesomeIcon
                icon={faWindowClose}
                size="s"
                color={'#c8d4e7'}
                className={classes.close}
                onClick={handleClose}
            />
            <div className={classes.bar} style={{ width : `${progress}%`}}></div>
        </div>
    );
};

export default Notification
