import { style } from '@vanilla-extract/css';
import * as Theme from '@/app/theme.css';

export const searchInputGroup = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const searchInput = style([
  Theme.customShadow,
  Theme.customInput,
  Theme.responsiveStyle({
    tablet: {
      paddingRight: '48px',
    },
    desktop: {
      paddingRight: '64px',
    },
  }),
]);

export const searchImage = style({
  position: 'absolute',
  right: '20px',
  cursor: 'pointer',
  width: '24px',
  height: '24px',
});

export const searchButton = style([
  Theme.customButtonLong,
  {
    backgroundColor: Theme.colors['secondary-20'],
    color: Theme.colors['gray-10'],
    marginTop: '20px',
    ':active': {
      backgroundColor: Theme.colors['secondary-30'],
    },
    ':hover': {
      backgroundColor: Theme.colors['secondary-30'],
    },
  },
]);
