import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ ButtonName, color, wide }) => (
  <button type="button" className={`${color ? 'lightgray' : 'orange'} ${wide ? 'large' : 'small'}`}>
    {ButtonName}
  </button>
);

Button.defaultProps = {
  color: false,
  wide: false,
};

Button.propTypes = {
  ButtonName: PropTypes.string.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
