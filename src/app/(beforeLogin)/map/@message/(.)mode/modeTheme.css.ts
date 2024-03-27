import { style } from '@vanilla-extract/css';
import * as Theme from '@/app/theme.css';
import { colors } from '@/app/theme.css';

export const container = style({
  position: 'absolute',
  top: '10px',
  left: '12px',
  right: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 50,
});

export const layer = style([
  Theme.text.body,
  Theme.responsiveStyle({
    tablet: {
      width: '100%',
    },
    desktop: {
      minWidth: '600px',
      width: 'auto',
    },
  }),
  {
    backgroundColor: Theme.colors['secondary-20'],
    color: Theme.colors['gray-10'],
    padding: '8px 0',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
]);
