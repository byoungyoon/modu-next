import { fontFaces } from '@/app/text.css';
import { ComplexStyleRule, style, StyleRule } from '@vanilla-extract/css';

export const responsiveStyle = ({ tablet, desktop }: { tablet: StyleRule; desktop: StyleRule }) => ({
  '@media': {
    '(max-width: 767px)': tablet,
    'screen and (min-width: 768px)': tablet,
    'screen and (min-width: 1024px)': desktop,
  },
});

export const colors = {
  'brand-10': '#F8B099',
  'brand-20': '#EE805D',
  'brand-30': '#EE5626',
  'brand-40': '#B54521',
  'brand-50': '#561D0B',
  'secondary-5': '#F1FFFF',
  'secondary-10': '#ADEBE8',
  'secondary-20': '#41A6A1',
  'secondary-30': '#238C87',
  'secondary-40': '#1A5F51',
  'secondary-50': '#003427',
  'gray-10': '#FFFFFF',
  'gray-15': '#F8F8F8',
  'gray-20': '#F1F1F1',
  'gray-30': '#EAEAEA',
  'gray-40': '#DBDBDB',
  'gray-50': '#C5C5C5',
  'gray-60': '#A6A6A6',
  'gray-70': '#7C7C7C',
  'gray-80': '#5D5D5D',
  'gray-90': '#3F3F3F',
  'gray-100': '#1A1A1A',
};

export const text = {
  caption: {
    fontFamily: fontFaces.regular,
    lineHeight: 1.5,
    fontSize: '12px',
  },
  body: {
    fontFamily: fontFaces.regular,
    lineHeight: 1.5,
    fontSize: '16px',
  },
  display: {
    fontFamily: fontFaces.bold,
    lineHeight: 1.5,
    fontSize: '40px',
  },
  headline: {
    fontFamily: fontFaces.semiBold,
    lineHeight: 1.5,
    fontSize: '28px',
  },
  subHeadline: {
    fontFamily: fontFaces.semiBold,
    lineHeight: 1.5,
    fontSize: '24px',
  },
  title: {
    fontFamily: fontFaces.semiBold,
    lineHeight: 1.5,
    fontSize: '20px',
  },
  subTitle: {
    fontFamily: fontFaces.regular,
    lineHeight: 1.5,
    fontSize: '18px',
  },
};

export const customShadow = style({
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.15)',
});

export const customButtonLong = style([
  customShadow,
  responsiveStyle({
    tablet: {
      ...text.subTitle,
      height: '60px',
    },
    desktop: {
      ...text.subHeadline,
      height: '72px',
    },
  }),
  {
    width: '100%',
    cursor: 'pointer',
    borderRadius: '10px',
    outline: 'none',
    border: 'none',
  },
]);

export const customButtonMid = style([
  customShadow,
  text.title,
  {
    cursor: 'pointer',
    borderRadius: '100px',
    outline: 'none',
    border: 'none',
    width: '220px',
    height: '60px',
  },
]);

export const customInput = style([
  text.subTitle,
  responsiveStyle({
    tablet: {
      padding: '12px',
    },
    desktop: {
      padding: '20px',
    },
  }),
  {
    color: colors['gray-100'],
    backgroundColor: colors['gray-10'],
    outline: 'none',
    borderRadius: '10px',
    width: '100%',
    border: '1px solid',
    borderColor: colors['gray-40'],

    '::placeholder': {
      color: colors['gray-50'],
      fontFamily: fontFaces.semiBold,
      fontSize: '18px',
      lineHeight: 1.5,
    },
  },
]);

export const customModal = style({
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 51,
});
