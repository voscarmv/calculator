/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Display = props => (
  <div>
    {props.value || 0}
  </div>
);

export default Display;
