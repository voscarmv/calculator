import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ ButtonName, color, wide }) => (
  <button type="button" className={`${color} ${wide ? 'large' : 'small'}`}>
    {ButtonName}
  </button>
);

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  ButtonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
