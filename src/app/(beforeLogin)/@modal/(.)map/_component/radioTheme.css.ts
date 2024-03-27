import { globalStyle, style } from '@vanilla-extract/css';
import * as Theme from '@/app/theme.css';

export const radioBox = style([
  {
    display: 'inline-flex',
    cursor: 'pointer',
    userSelect: 'none',
    alignItems: 'center',
    gap: '10px',
  },
]);

export const radio = style({
  display: 'none',
});

export const radioText = style([
  Theme.text.subTitle,
  {
    color: Theme.colors['gray-100'],
  },
]);

export const on = style({
  position: 'relative',
  left: 0,
  top: 0,
  width: '20px',
  height: '20px',
  backgroundColor: Theme.colors['gray-40'],
  borderRadius: '50%',

  '::after': {
    content: '',
    display: 'none',
    position: 'absolute',
    left: '5px',
    top: '5px',
    width: '10px',
    height: '10px',
    backgroundColor: Theme.colors['gray-10'],
    borderRadius: '50%',
  },
});

globalStyle(`${radio}:checked + ${on}`, {
  backgroundColor: Theme.colors['secondary-30'],
});

globalStyle(`${radio}:checked + ${on}::after`, {
  display: 'block',
});
