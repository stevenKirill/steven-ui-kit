import React, { useState } from 'react';
import Container from '../components/Container/Container';
import H3 from '../components/H3/H3';
import Switch from '../components/Switch/Switch';

const SwitchPage = () => {
  const [switched, setSwitched] = useState(false);
  const [theme,setTheme] = useState(false);
  const light = '#F7F6F2';
  const dark = '#11324D';
    return (
        <Container>
          <H3 text="Компонент Switch"/>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
              <Switch
                isToggled={switched}
                onToggle={setSwitched}
                isRounded={true}
              />
            </div>
            <div style={{
              backgroundColor: `${theme ? light : dark}`,
              width: '400px',
              height: '200px',
              padding: '10px'
              }}>
              <Switch
                isToggled={theme}
                onToggle={setTheme}
                isRounded={false}
              />
            </div>
          </div>
        </Container>
    );
};

export default SwitchPage
