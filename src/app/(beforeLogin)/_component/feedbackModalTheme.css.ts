import { style } from '@vanilla-extract/css';
import { colors, responsiveStyle, text } from '@/app/theme.css';

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
      width: '100%',
      height: '100%',
      borderRadius: 0,
    },
    desktop: {
      width: '500px',
      height: '600px',
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

export const title = style([text.headline]);

export const subTitle = style([
  text.subTitle,
  {
    marginTop: '8px',
  },
]);

export const faceSection = style([
  {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
  },
  responsiveStyle({
    tablet: {
      marginTop: '28px',
    },
    desktop: {
      marginTop: '32px',
    },
  }),
]);

export const faceSectionItem = style({
  textAlign: 'center',
});

export const faceSectionImage = style([
  responsiveStyle({
    tablet: {
      width: 50,
      height: 50,
    },
    desktop: {
      width: 60,
      height: 60,
    },
  }),
  {
    cursor: 'pointer',
  },
]);

export const faceSectionText = style([
  text.caption,
  {
    color: colors['gray-70'],
    marginTop: '10px',
  },
]);

export const inputSection = style({
  width: '100%',
});

export const inputSectionLabel = style([
  responsiveStyle({
    tablet: {
      ...text.body,
    },
    desktop: {
      ...text.subTitle,
    },
  }),
  {
    marginTop: '60px',
    marginBottom: '10px',
  },
]);

export const inputSectionTextarea = style([
  text.subTitle,
  {
    width: '100%',
    borderRadius: '10px',
    backgroundColor: colors['gray-10'],
    border: '1px solid',
    borderColor: colors['gray-40'],
    padding: '18px 20px',
    outline: 'none',
    resize: 'none',
  },
]);

export const loading = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
