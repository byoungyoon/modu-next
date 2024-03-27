import { style } from '@vanilla-extract/css';
import * as Theme from '@/app/theme.css';
import { colors } from '@/app/theme.css';

export const resultButton = style([
  Theme.customButtonMid,
  {
    marginTop: '10px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: Theme.colors['brand-40'],
    color: Theme.colors['gray-10'],
    ':hover': {
      backgroundColor: Theme.colors['brand-50'],
    },
    ':active': {
      backgroundColor: Theme.colors['brand-50'],
    },
  },
]);

export const resultButtonDisabled = style({
  backgroundColor: colors['gray-50'],
  color: colors['gray-10'],
  border: 'none',
  pointerEvents: 'none',
});
