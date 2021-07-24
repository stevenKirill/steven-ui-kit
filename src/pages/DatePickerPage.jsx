import React from 'react';
import Container from '../components/Container/Container';
import H3 from '../components/H3/H3';
import DatePicker from '../components/DatePicker/DatePicker';

const DatePickerPage = () => {
    return (
        <Container>
          <H3 text="Компонент DatePicker"/>
          <DatePicker/>
        </Container>
    );
};

export default DatePickerPage
