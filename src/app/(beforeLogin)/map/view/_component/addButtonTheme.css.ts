import { style } from '@vanilla-extract/css';
import * as Theme from '@/app/theme.css';

export const addButton = style([
  Theme.customButtonMid,
  {
    backgroundColor: Theme.colors['secondary-20'],
    color: Theme.colors['gray-10'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    ':hover': {
      backgroundColor: Theme.colors['secondary-30'],
    },
    ':active': {
      backgroundColor: Theme.colors['secondary-30'],
    },
  },
]);
