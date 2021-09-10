import React from 'react';
import Container from '../components/Container/Container';
import H3 from '../components/H3/H3';
import ProgressBar from '../components/ProgressBar/ProgressBar';

const ProgressBarPage = () => {
    return (
        <Container>
          <H3 text="Компонент Progress Bar"/>
          <ProgressBar/>
        </Container>
    );
};

export default ProgressBarPage;