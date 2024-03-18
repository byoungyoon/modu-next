import { ComplexStyleRule, style, StyleRule, styleVariants } from '@vanilla-extract/css';
import * as Text from '@/app/text.css';

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

const space = {
  none: '0px',
  small: '4px',
  medium: '8px',
  large: '16px',
  // etc.
};

const size = {
  display: '40px',
  headline: '28px',
  'headline-small': '24px',
  title: '20px',
  'title-small': '18px',
  body: '16px',
  'body-small': '14px',
  caption: '12px',
};

export const responsiveStyle = ({ tablet, desktop }: { tablet: StyleRule; desktop: StyleRule }) => ({
  '@media': {
    '(max-width: 768px)': tablet,
    'screen and (min-width: 1024px)': desktop,
  },
});

const base = {
  lineHeight: '1.5',
};

export const text = {
  caption: {
    ...base,
    fontSize: '12px',
    fontFamily: Text.preRegular,
  },
  body: {
    ...base,
    fontSize: '16px',
    fontFamily: Text.preRegular,
  },
  display: {
    ...base,
    fontSize: '40px',
    fontFamily: Text.preBold,
  },
  headline: {
    ...base,
    fontSize: '28px',
    fontFamily: Text.preSemiBold,
  },
  subHeadline: {
    ...base,
    fontSize: '24px',
    fontFamily: Text.preSemiBold,
  },
  title: {
    ...base,
    fontSize: '20px',
    fontFamily: Text.preSemiBold,
  },
  subTitle: {
    ...base,
    fontSize: '18px',
    fontFamily: Text.preRegular,
  },
};
