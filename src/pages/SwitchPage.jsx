import React, { useState } from 'react';
import Container from '../components/Container/Container';
import H3 from '../components/H3/H3';
import Switch from '../components/Switch/Switch';

const SwitchPage = () => {
  const [switched, setSwitched] = useState(false);
    return (
        <Container>
          <H3 text="Компонент Switch"/>
          <Switch
            isToggled={switched}
            onToggle={setSwitched}
            isRounded={true}
          />
        </Container>
    );
};

export default SwitchPage
