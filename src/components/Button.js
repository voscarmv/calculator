import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ ButtonName }) => (
  <button type="button">
    {ButtonName}
  </button>
);

Button.propTypes = {
  ButtonName: PropTypes.string.isRequired,
};

export default Button;
