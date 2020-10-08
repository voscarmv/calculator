import React from 'react';
import propTypes from 'prop-types';

const Display = ({ displayValue }) => (
  <div className="Display">
    {displayValue}
  </div>
);

Display.defaultProps = {
  displayValue: '0',
};

Display.propTypes = {
  displayValue: propTypes.string,
};

export default Display;
