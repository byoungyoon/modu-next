import { globalStyle, style } from '@vanilla-extract/css';
import { colors, responsiveStyle, text } from '@/app/theme.css';

export const section = style([
  responsiveStyle({
    tablet: {
      height: '430px',
      flexDirection: 'column',
      gap: '73px',
      padding: '0 20px',
    },
    desktop: {
      height: '300px',
      flexDirection: 'row',
      gap: '280px',
    },
  }),
  {
    backgroundColor: colors['gray-20'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
]);

export const sectionLayer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const sectionLayerTitle = style([
  text.display,
  {
    color: colors['secondary-20'],
  },
]);

export const sectionLayerContent = style([text.title]);

globalStyle(`${sectionLayerContent} span`, {
  color: colors['secondary-20'],
});
