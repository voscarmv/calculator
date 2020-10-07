import React from 'react';
import Button from './Button';

const buttonGroups = [
  {
    name: 'group1',
    buttons: [
      {
        name: 'AC',
        color: true,
      },
      {
        name: '+/,-',
        color: true,
      },
      {
        name: '%',
        color: true,
      },
      {
        name: '÷',
      },
    ],
  },
  {
    name: 'group2',
    buttons: [
      {
        name: '7',
        color: true,
      },
      {
        name: '8',
        color: true,
      },
      {
        name: '9',
        color: true,
      },
      {
        name: 'X',
      },
    ],
  },
  {
    name: 'group3',
    buttons: [
      {
        name: '4',
        color: true,
      },
      {
        name: '5',
        color: true,
      },
      {
        name: '6',
        color: true,
      },
      {
        name: '-',
      },
    ],
  },
  {
    name: 'group4',
    buttons: [
      {
        name: '1',
        color: true,
      },
      {
        name: '2',
        color: true,
      },
      {
        name: '3',
        color: true,
      },
      {
        name: '+',
      },
    ],
  },
  {
    name: 'group5',
    buttons: [
      {
        name: '0',
        wide: true,
        color: true,
      },
      {
        name: '.',
        color: true,
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
          <div className={g.name} key={g.id}>
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
