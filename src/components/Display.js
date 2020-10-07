import React from 'react';
import propTypes from 'prop-types';

const Display = ({ displayValue }) => (
  <div>
    {displayValue || 0}
  </div>
);

Display.propTypes = {
  displayValue: propTypes.string.isRequired,
};

export default Display;
