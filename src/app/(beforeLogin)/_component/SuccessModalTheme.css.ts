import { style } from '@vanilla-extract/css';
import { responsiveStyle, text } from '@/app/theme.css';

export const modal = style({
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 51,
});

export const container = style([
  responsiveStyle({
    tablet: {
      width: '300px',
    },
    desktop: {
      width: '360px',
      borderRadius: '16px',
    },
  }),
  {
    background: '#ffffff',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '35px',
  },
]);

export const title = style([
  responsiveStyle({
    tablet: {
      ...text.subTitle,
      marginTop: '19px',
    },
    desktop: {
      ...text.subHeadline,
      marginTop: '22px',
    },
  }),
  {
    textAlign: 'center',
  },
]);

export const content = style([
  text.body,
  {
    textAlign: 'center',
  },
]);
