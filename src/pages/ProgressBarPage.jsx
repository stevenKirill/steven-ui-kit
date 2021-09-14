import React from 'react';
import Container from '../components/Container/Container';
import H3 from '../components/H3/H3';
import ProgressBar from '../components/ProgressBar/ProgressBar';

const progressBarData = [
  {
    title: 'Квартира',
    percent: 40,
    color: '#236bdf',
    animationTime: 1
  },
  {
    title: 'Еда',
    percent: 20,
    color: '#e45327',
    animationTime: 3
  },
  {
    title: 'Одежда',
    percent: 10,
    color: '#c8e42c',
    animationTime: 2.5
  },
  {
    title: 'Сотовая связь',
    percent: 5,
    color: '#76DC8C',
    animationTime: 5
  },
  {
    title: 'Развлечения',
    percent: 25,
    color: '#b84de2',
    animationTime: 2
  }
]

const ProgressBarPage = () => {
    return (
        <Container>
          <H3 text="Компонент Progress Bar"/>
          <ProgressBar mainTitle="Расходы" config={progressBarData}/>
        </Container>
    );
};

export default ProgressBarPage;