import React from 'react';
import Accordion from '../components/Accordion/Accordion';
import Container from '../components/Container/Container';
import H3 from '../components/H3/H3';

const DATA_FOR_ACCORDION = [
  {
    title: 'First block',
    description: 'Think how hard physics would be if particles could think. All serious daring starts from within. Think how hard physics would be if particles could think. All serious daring starts from within.'
  },
  {
    title: 'Second block',
    description: "Love is the flower you've got to let grow. Without courage, wisdom bears no fruit. You give before you get Love is the flower you've got to let grow. Without courage, wisdom bears no fruit. You give before you get"
  },
  {
    title: 'Third block',
    description: 'Real magic in relationships means an absence of judgement of others. I never think of the future. It comes soon enough.'
  },
  {
    title: 'Fourth block',
    description: 'Courage is going from failure to failure without losing enthusiasm. The two most powerful warriors are patience and time. The two most powerful warriors are patience and time. The two most powerful warriors are patience and time.'
  },
  {
    title: 'Fifth block',
    description: 'Life is movement-we breathe, we eat, we walk, we move! Life is movement-we breathe, we eat, we walk, we move! Life is movement-we breathe, we eat, we walk, we move! Life is movement-we breathe, we eat, we walk, we move! Life is movement-we breathe, we eat, we walk, we move! Life is movement-we breathe, we eat, we walk, we move!'
  },
];

const AccordionPage = () => {
    return (
        <Container>
          <H3 text="Компонент Accordion"/>
          <Accordion 
            data={DATA_FOR_ACCORDION}
            openedDefaultIndex={1}
            color="RED"
            icon="PLUS"
          />
            <Accordion 
            data={DATA_FOR_ACCORDION}
            openedDefaultIndex={3}
            color="GREEN"
            icon="ARROWS"
          />
        </Container>
    );
};

export default AccordionPage;