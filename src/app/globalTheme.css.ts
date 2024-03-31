import { assignVars, createGlobalTheme, createGlobalThemeContract, globalStyle, style } from '@vanilla-extract/css';
import * as Theme from './theme.css';

export const global = createGlobalThemeContract({
  background: {
    color: 'bg-color',
  },
  foreground: {
    color: 'fg-color',
  },
});
createGlobalTheme(':root', global, {
  background: {
    color: 'rgb(255, 255, 255)',
  },
  foreground: {
    color: 'rgb(0, 0, 0)',
  },
});
const darkGlobalTheme = {
  background: {
    color: 'rgb(0, 0, 0)',
  },
  foreground: {
    color: 'rgb(255, 255, 255)',
  },
};
globalStyle(':root', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: assignVars(global, darkGlobalTheme),
    },
  },
});
globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});
globalStyle('html', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      colorScheme: 'dark',
    },
  },
});
globalStyle('html, body', {
  maxWidth: '100dvw',
  overflowX: 'hidden',
});
globalStyle('body', {
  color: global.foreground.color,
});
globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

export const container = style({
  height: '100dvh',
  position: 'relative',
});

export const layer = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const title404 = style({
  fontSize: '186px',
  fontWeight: 900,
  margin: 0,
  textTransform: 'uppercase',
  background: 'url(/img/text.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
});

export const subTitle404 = style([
  Theme.text.title,
  {
    marginTop: '10px',
  },
]);

export const body404 = style([
  Theme.text.body,
  {
    marginTop: '5px',
  },
]);

export const button404 = style([
  Theme.text.subTitle,
  {
    color: Theme.colors['secondary-30'],
  },
]);
