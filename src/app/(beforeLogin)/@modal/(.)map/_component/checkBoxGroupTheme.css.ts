import { style } from '@vanilla-extract/css';
import * as Theme from '@/app/theme.css';
import { responsiveStyle } from '@/app/theme.css';

export const container = style({});

export const layer = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});

export const layerInput = style([
  Theme.text.subTitle,
  Theme.customInput,
  {
    paddingLeft: '54px',
    pointerEvents: 'none',
    color: Theme.colors['gray-60'],
    borderRadius: 0,
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
