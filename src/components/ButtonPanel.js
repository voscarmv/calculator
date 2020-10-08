import React from 'react';
import Button from './Button';

const buttonGroups = [
  {
    buttons: [
      {
        name: 'AC',
        color: 'lightgray',
      },
      {
        name: '+/,-',
        color: 'lightgray',
      },
      {
        name: '%',
        color: 'lightgray',
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
        color: 'lightgray',
      },
      {
        name: '8',
        color: 'lightgray',
      },
      {
        name: '9',
        color: 'lightgray',
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
        color: 'lightgray',
      },
      {
        name: '5',
        color: 'lightgray',
      },
      {
        name: '6',
        color: 'lightgray',
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
        color: 'lightgray',
      },
      {
        name: '2',
        color: 'lightgray',
      },
      {
        name: '3',
        color: 'lightgray',
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
        wide: true,
        color: 'lightgray',
      },
      {
        name: '.',
        color: 'lightgray',
      },
      {
        name: '=',
      },
    ],
  },
];

const ButtonPanel = () => (
  <div className="ButtonPanel">
    {
      buttonGroups.map(
        g => (
          <div className="buttonrow" key={g.id}>
            {
              g.buttons.map(
                b => <Button ButtonName={b.name} color={b.color} wide={b.wide} key={b.id} />,
              )
            }
          </div>
        ),
      )
    }
  </div>
);

export default ButtonPanel;
