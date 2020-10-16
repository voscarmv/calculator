import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    const { c, w, ButtonName } = this.props;
    this.color = c;
    this.wide = w;
    this.buttonName = ButtonName;
  }

  handleClick = buttonName => {
    const { cH } = this.props;
    cH(buttonName);
  }

  render() {
    return (
      <button onClick={() => this.handleClick(this.buttonName)} type="button" className={`${this.color} ${this.wide ? 'large' : 'small'}`}>
        {this.buttonName}
      </button>
    );
  }
}

Button.defaultProps = {
  c: 'orange',
  w: false,
  cH: () => {},
};

Button.propTypes = {
  ButtonName: PropTypes.string.isRequired,
  cH: PropTypes.func,
  c: PropTypes.string,
  w: PropTypes.bool,
};

export default Button;
