import React, { useContext } from 'react';
import { NotificationContext } from './NotificationProvider';
import { v4 } from "uuid";
import { NOTIFICATION_ACTION } from './types';

/** хук для добавления уведомлений */
export const useNotification = () => {
    const dispatch = useContext(NotificationContext);
    return props => {
        dispatch(
            {
                type: NOTIFICATION_ACTION.ADD,
                payload: {
                    id: v4(),
                    ...props,
                }
            }
        )
    }
};