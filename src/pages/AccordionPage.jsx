import React from 'react';
import Accordion from '../components/Accordion/Accordion';
import Container from '../components/Container/Container';
import H3 from '../components/H3/H3';

const AccordionPage = () => {
    return (
        <Container>
          <H3 text="Компонент Accordion"/>
          <Accordion/>
        </Container>
    );
};

export default AccordionPage;