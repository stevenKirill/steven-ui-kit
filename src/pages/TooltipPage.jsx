import React from 'react';
import Container from '../components/Container/Container';
import H3 from '../components/H3/H3';
import Tooltip from '../components/Tooltip/Tooltip';
import { TOOLTIP_POSITIONS } from '../components/Tooltip/constants';

const classesForButton = {
  padding: '10px',
  backgroundColor: '#262C40',
  outline: 'none',
  color: 'white',
  fontSize: '18px',
  border: 'none',
  minWidth: '150px',
  cursor: 'pointer',
  minHeight: '50px',
};

const tooltipsContainer = {
  marginTop: '120px'
};

const TooltipPage = () => {
    return (
        <Container>
          <H3 text="Компонент Tooltip"/>
          <div style={tooltipsContainer}>
            <Tooltip content="Tooltip text top" position={TOOLTIP_POSITIONS.TOP}>
              <button style={classesForButton}>top</button>
            </Tooltip>
            <Tooltip content="Tooltip text bottom" position={TOOLTIP_POSITIONS.BOTTOM}>
              <button className="margin-left-10" style={classesForButton}>bottom</button>
            </Tooltip>
            <Tooltip content="Tooltip text left" position={TOOLTIP_POSITIONS.LEFT}>
              <button className="margin-left-10" style={classesForButton}>left</button>
            </Tooltip>
            <Tooltip content="Tooltip text right" position={TOOLTIP_POSITIONS.RIGHT}>
              <button className="margin-left-10" style={classesForButton}>right</button>
            </Tooltip>
          </div>
        </Container>
    );
};

export default TooltipPage
