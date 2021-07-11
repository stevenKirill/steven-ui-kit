import React from 'react';
import Dropdown from './components/DropDown/Dropdown';
import './styles/common.css';
import './App.css';
import { generateId } from './utils/utilsFuncs';
import data from './components/DropDown/data/countries.json';

const dataWithIds = data.map(item => ({ ...item, id: generateId() }))

function App() {
  return (
    <div className="App">
      <div style={{
        margin: '10px auto',
        display: 'block',
        width: '500px',
      }}>
        <h3 style={{
          textAlign: 'left',
          userSelect: 'none',
        }}>Test dropdown</h3>
        <Dropdown
          options={dataWithIds}
          placeHolder={'Выберите значение'}
        />
      </div>
    </div>
  );
}

export default App;
