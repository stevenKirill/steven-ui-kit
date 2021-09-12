import React from 'react';
import Container from '../components/Container/Container';
import H3 from '../components/H3/H3';
import { NOTIFICATION_TYPES } from '../components/Notification/types';
import { useNotification } from '../components/Notification/hooks';

const addNotifictionBtnStyles = {
  width: '200px',
  height: 'auto',
  padding: '10px',
  textAlign: 'center',
  backgroundColor: '#262C40',
  outline: 'none',
  border: 'none',
  color: 'white',
  marginRight: '10px',
  cursor: 'pointer',
};

const NotificationPage = () => {

  const addNewNotification = useNotification();

  const addNotification = (type) => {
      switch(type) {
        case NOTIFICATION_TYPES.SUCCESS:
          addNewNotification({
            type: NOTIFICATION_TYPES.SUCCESS,
            text: 'Вы совершили успешное действие',
            duration: 2000,
          });
          break;
        case NOTIFICATION_TYPES.ERROR:
          addNewNotification({
            type: NOTIFICATION_TYPES.ERROR,
            text: 'Извините произошла ошибка',
          });
          break;
          case NOTIFICATION_TYPES.INFO:
            addNewNotification({
              type: NOTIFICATION_TYPES.INFO,
              text: 'Прочитайте информацию внимательно',
            });
          break;
          case NOTIFICATION_TYPES.UNKNOWN:
            addNewNotification({
              type: NOTIFICATION_TYPES.UNKNOWN,
              text: 'Неизвестное сообщение',
            });
          break;
      };
  };

    return (
        <Container>
          <H3 text="Компонент Notification"/>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <button style={addNotifictionBtnStyles} onClick={() => addNotification(NOTIFICATION_TYPES.SUCCESS)}>Успешное действие</button>
            <button style={addNotifictionBtnStyles} onClick={() => addNotification(NOTIFICATION_TYPES.ERROR)} >Неуспешное действие</button>
            <button style={addNotifictionBtnStyles} onClick={() => addNotification(NOTIFICATION_TYPES.INFO)}>Информация</button>
            <button style={addNotifictionBtnStyles} onClick={() => addNotification(NOTIFICATION_TYPES.UNKNOWN)}>Простое окно</button>
          </div>
        </Container>
    );
};

export default NotificationPage;