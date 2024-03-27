import { style } from '@vanilla-extract/css';
import * as Theme from '@/app/theme.css';

export const searchInputGroup = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const searchInputGroupNone = style({
  display: 'none',
});

export const searchInput = style([
  Theme.customInput,
  Theme.customShadow,
  Theme.responsiveStyle({
    tablet: {
      paddingRight: '48px',
    },
    desktop: {
      paddingRight: '64px',
    },
  }),
  {
    height: '50px',
  },
]);

export const searchImage = style({
  position: 'absolute',
  right: '20px',
  cursor: 'pointer',
  width: '24px',
  height: '24px',
});
