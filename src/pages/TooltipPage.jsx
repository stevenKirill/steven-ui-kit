import React from 'react';
import Container from '../components/Container/Container';
import H3 from '../components/H3/H3';
import Tooltip from '../components/Tooltip/Tooltip';

const TooltipPage = () => {
    return (
        <Container>
          <H3 text="Компонент Tooltip"/>
          <Tooltip/>
        </Container>
    );
};

export default TooltipPage
