import { style } from '@vanilla-extract/css';
import { colors, responsiveStyle, text } from '@/app/theme.css';

export const modal = style({
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});
export const container = style([
  responsiveStyle({
    tablet: {
      width: '100%',
      height: '100%',
      borderRadius: 0,
    },
    desktop: {
      maxWidth: '80vw',
      minWidth: '500px',
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

export const buttonSection = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '18px',
  marginTop: '56px',
});

export const submitButton = style([
  responsiveStyle({
    tablet: {
      ...text.subTitle,
      height: '50px',
    },
    desktop: {
      ...text.subHeadline,
      height: '64px',
    },
  }),
  {
    borderRadius: '10px',
    outline: 'none',
    width: '182px',
    backgroundColor: colors['gray-10'],
    color: colors['gray-50'],
    border: '2px solid',
    borderColor: colors['gray-50'],
    cursor: 'pointer',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.15)',
  },
]);

export const activeButton = style({
  backgroundColor: colors['secondary-20'],
  color: colors['gray-10'],
  borderColor: colors['secondary-20'],

  ':hover': {
    backgroundColor: colors['secondary-30'],
  },
  ':active': {
    backgroundColor: colors['secondary-30'],
  },
});

export const closeButton = style([
  responsiveStyle({
    tablet: {
      ...text.subTitle,
      height: '50px',
    },
    desktop: {
      ...text.subHeadline,
      height: '64px',
    },
  }),
  {
    borderRadius: '10px',
    outline: 'none',
    width: '182px',
    backgroundColor: colors['gray-50'],
    color: colors['gray-10'],
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.15)',
  },
]);

export const backButtonSection = style({
  position: 'absolute',
  top: '3%',
  right: '3%',
});

export const backButton = style({
  cursor: 'pointer',
});

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
