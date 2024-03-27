import { style } from '@vanilla-extract/css';
import { colors, responsiveStyle, text } from '@/app/theme.css';

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
