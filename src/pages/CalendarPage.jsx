import React from 'react';
import Container from '../components/Container/Container';
import Calendar from '../components/Calendar/Calendar';
import H3 from '../components/H3/H3';

const CalendarPage = () => {
    return (
        <Container>
          <H3 text="Компонент Calendar"/>
          <Calendar clickHandler={(arg) => console.log('hello',arg)}/>
        </Container>
    );
};

export default CalendarPage;
