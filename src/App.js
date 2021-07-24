import React from 'react';
import './styles/common.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes/routes';
import menu from './menu/menu';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h2>Библиотека компонентов</h2>
        <div className="main-container">
          {menu()}
          {routes()}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
