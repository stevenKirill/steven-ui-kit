import React from 'react';
import Container from '../components/Container/Container';
import Dropdown from '../components/DropDown/Dropdown';
import H3 from '../components/H3/H3';
import { generateId } from '../utils/utilsFuncs';
import data from '../components/DropDown/data/countries.json';

const dataWithIds = data.map(item => ({ ...item, id: generateId() }));

const DropDownPage = () => {
    return (
        <Container>
          <H3 text="Компонент Dropdown"/>
            <Dropdown
              options={dataWithIds}
              placeHolder={'Выберите значение'}
            />
        </Container>
    );
};

export default DropDownPage;
