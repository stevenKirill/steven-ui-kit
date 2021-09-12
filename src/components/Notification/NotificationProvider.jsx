import React, { createContext, useReducer } from 'react';
import { NOTIFICATION_ACTION } from './types';
import classes from './notification.module.css';
import Notification from './Notification';

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
    const [state,dispatch] = useReducer((state,action) => {
        switch(action.type) {
            case NOTIFICATION_ACTION.ADD:
            return [...state, action.payload];
            case NOTIFICATION_ACTION.REMOVE:
                return state.filter(noti => noti.id !== action.id)
            default:
                return state;
        }
    },[]);
    
    return (
        <NotificationContext.Provider value={dispatch}>
            <div className={classes.wrapper}>
                {state.map(noti => {
                    return (
                        <Notification 
                            key={noti.id}
                            dispatch={dispatch}
                            {...noti}
                        />
                    );
                })}
            </div>
            {children}
        </NotificationContext.Provider>

    );
};

export default NotificationProvider
