import React from 'react';
import Container from '../components/Container/Container';
import H3 from '../components/H3/H3';
import SelectComponent from '../components/Select/Select';

const SelectPage = () => {
    return (
        <Container>
          <H3 text="Компонент Select (open source react-select lib)"/>
          <SelectComponent/>
        </Container>
    );
};

export default SelectPage