import { style } from '@vanilla-extract/css';
import * as Theme from '@/app/theme.css';
import { responsiveStyle } from '@/app/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  height: '100dvh',
});

export const section = style({
  flexGrow: 1,

  backgroundColor: Theme.colors['gray-20'],
  position: 'relative',
});

export const searchLayer = style([
  responsiveStyle({
    tablet: {
      top: '12px',
      left: '20px',
      right: '20px',
    },
    desktop: {
      top: '20px',
      left: '20px',
      width: '320px',
    },
  }),
  {
    position: 'absolute',
    zIndex: 50,
  },
]);

export const optionLayer = style([
  responsiveStyle({
    tablet: {
      gap: '10px',
      right: 0,
      bottom: '32px',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    desktop: {
      gap: '15px',
      right: '30px',
      bottom: '42px',
      width: 'auto',
      flexDirection: 'column',
      alignItems: 'end',
    },
  }),
  {
    display: 'flex',
    position: 'absolute',
    zIndex: 50,
  },
]);

export const iconButton = style([
  Theme.customShadow,
  responsiveStyle({
    tablet: {
      width: '45px',
      height: '45px',
    },
    desktop: {
      width: '60px',
      height: '60px',
    },
  }),
  {
    backgroundColor: Theme.colors['gray-10'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
  },
]);

export const iconButtonImage = style([
  responsiveStyle({
    tablet: {
      width: '24px',
      height: '24px',
    },
    desktop: {
      width: '30px',
      height: '30px',
    },
  }),
]);
