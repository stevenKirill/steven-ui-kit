import React from 'react';
import Container from '../components/Container/Container';
import FiveStars from '../components/FiveStars/FiveStars';
import H3 from '../components/H3/H3';

const FiveStarsPage = () => {
    return (
        <Container>
          <H3 text="Компонент Пять звезд"/>
            <FiveStars/>
        </Container>
    );
};

export default FiveStarsPage
