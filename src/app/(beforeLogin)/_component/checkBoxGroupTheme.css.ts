import { style } from '@vanilla-extract/css';
import * as Theme from '@/app/theme.css';
import { colors, responsiveStyle } from '@/app/theme.css';

export const container = style({});

export const layer = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none',
});

export const layerReadonly = style({
  pointerEvents: 'none',
});

export const layerInput = style([
  Theme.text.subTitle,
  responsiveStyle({
    tablet: {
      padding: '12px 54px',
    },
    desktop: {
      padding: '20px 54px',
    },
  }),
  {
    paddingLeft: '54px',
    pointerEvents: 'none',
    color: Theme.colors['gray-60'],
    borderRadius: 0,
    outline: 'none',
    width: '100%',
    border: '1px solid',
    borderColor: colors['gray-40'],
    selectors: {
      'div:first-child > &': {
        borderRadius: '10px 10px 0 0',
      },
      'div:last-child > &': {
        borderRadius: '0 0 10px 10px',
      },
    },
  },
]);

export const layerInputChecked = style({
  color: Theme.colors['gray-100'],
});

export const layerImage = style({
  position: 'absolute',
  left: '20px',
});
