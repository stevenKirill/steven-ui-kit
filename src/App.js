import React from 'react';
import Container from './components/Container/Container';
import Dropdown from './components/DropDown/Dropdown';
import Calendar from './components/Calendar/Calendar';
import H3 from './components/H3/H3';
import './styles/common.css';
import './App.css';
import { generateId } from './utils/utilsFuncs';
import data from './components/DropDown/data/countries.json';

const dataWithIds = data.map(item => ({ ...item, id: generateId() }));

function App() {
  return (
    <div className="app">
      <Container>
        <H3 text="Тестовый dropdown"/>
          <Dropdown
            options={dataWithIds}
            placeHolder={'Выберите значение'}
          />
      </Container>
      <Container>
        <H3 text="Тестовый календарь"/>
        <Calendar clickHandler={(arg) => console.log('hello',arg)}/>
      </Container>
    </div>
  );
}

export default App;
