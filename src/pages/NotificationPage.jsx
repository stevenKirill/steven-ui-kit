import React from 'react';
import Container from '../components/Container/Container';
import H3 from '../components/H3/H3';
import Notification from '../components/Notification/Notification';

const NotificationPage = () => {
    return (
        <Container>
          <H3 text="Компонент Notification"/>
          <Notification/>
        </Container>
    );
};

export default NotificationPage;