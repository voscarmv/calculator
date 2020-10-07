import React from 'react';
import Button from './Button';

const buttonGroups = [
  {
    name: 'group1',
    buttons: ['AC', '+/,-', '%', '÷'],
  },
  {
    name: 'group1',
    buttons: ['7', '8', '9', 'X'],
  },
  {
    name: 'group1',
    buttons: ['4', '5', '6', '-'],
  },
  {
    name: 'group1',
    buttons: ['1', '2', '3', '+'],
  },
  {
    name: 'group1',
    buttons: ['0', '.', '='],
  },
];

const ButtonPanel = () => (
  <div>
    {
      buttonGroups.map(
        g => (
          <div className={g.name} key={g.id}>
            {
              g.buttons.map(
                b => <Button ButtonName={b} key={b.id} />,
              )
            }
          </div>
        ),
      )
    }
  </div>
);

export default ButtonPanel;
