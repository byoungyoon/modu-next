import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '@/app/theme.css';

export const header = style({
  width: '100%',
  height: '70px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const headerImage = style([
  responsiveStyle({
    tablet: {
      width: '120px',
      height: '20px',
    },
    desktop: {
      width: '210px',
      height: '34px',
    },
  }),
]);
