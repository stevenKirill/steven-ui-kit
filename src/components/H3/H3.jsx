import React from 'react';

const H3 = ({ text }) => {
    return (
        <h3 style={{
          textAlign: 'left',
          userSelect: 'none',
        }}>
            {text}
        </h3>
    );
};

export default H3;
