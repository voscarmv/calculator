import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.buttonGroups = [
      {
        buttons: [
          {
            name: 'AC',
            col: 'lightgray',
          },
          {
            name: '+/-',
            col: 'lightgray',
          },
          {
            name: '%',
            col: 'lightgray',
          },
          {
            name: '÷',
          },
        ],
      },
      {
        buttons: [
          {
            name: '7',
            col: 'lightgray',
          },
          {
            name: '8',
            col: 'lightgray',
          },
          {
            name: '9',
            col: 'lightgray',
          },
          {
            name: 'X',
          },
        ],
      },
      {
        buttons: [
          {
            name: '4',
            col: 'lightgray',
          },
          {
            name: '5',
            col: 'lightgray',
          },
          {
            name: '6',
            col: 'lightgray',
          },
          {
            name: '-',
          },
        ],
      },
      {
        buttons: [
          {
            name: '1',
            col: 'lightgray',
          },
          {
            name: '2',
            col: 'lightgray',
          },
          {
            name: '3',
            col: 'lightgray',
          },
          {
            name: '+',
          },
        ],
      },
      {
        buttons: [
          {
            name: '0',
            wid: true,
            col: 'lightgray',
          },
          {
            name: '.',
            col: 'lightgray',
          },
          {
            name: '=',
          },
        ],
      },
    ];
  }

  hC = buttonName => {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  render() {
    return (
      <div className="ButtonPanel">
        {
          this.buttonGroups.map(
            g => (
              <div className="buttonrow" key={g.id}>
                {
                  g.buttons.map(
                    b => <Button cH={this.hC} ButtonName={b.name} c={b.col} w={b.wid} key={b.id} />,
                  )
                }
              </div>
            ),
          )
        }
      </div>
    );
  }
}

ButtonPanel.defaultProps = {
  clickHandler: () => {},
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

export default ButtonPanel;
