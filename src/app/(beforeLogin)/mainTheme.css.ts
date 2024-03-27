import { globalStyle, style } from '@vanilla-extract/css';
import { colors, responsiveStyle, text } from '@/app/theme.css';
import * as Theme from '@/app/theme.css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: colors['gray-10'],
  width: '100dvw',
  height: '100dvh',
  overflow: 'auto',
});

export const searchSection = style([
  responsiveStyle({
    tablet: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      marginTop: '72px',
      marginBottom: '40px',
    },
    desktop: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: '170px',
      marginBottom: '161px',
    },
  }),
  {
    display: 'flex',
    padding: '0 20px',
  },
]);

export const searchSectionLayer = style([
  responsiveStyle({
    tablet: {
      width: '100%',
    },
    desktop: {
      width: '550px',
    },
  }),
]);

export const searchSectionTitle = style([
  responsiveStyle({
    tablet: {
      ...text.headline,
    },
    desktop: {
      ...text.display,
    },
  }),
  {
    color: Theme.colors['secondary-20'],
    marginBottom: '20px',
  },
]);

export const searchSectionContent = style([
  responsiveStyle({
    tablet: {
      ...text.title,
    },
    desktop: {
      ...text.headline,
    },
  }),
  {
    ':last-child': {
      marginBottom: '20px',
    },
  },
]);

globalStyle(`${searchSectionContent} span`, {
  color: Theme.colors['secondary-20'],
});

export const searchSectionImage = style({
  marginBottom: '20px',
});

export const infoSection = style([
  responsiveStyle({
    tablet: {
      gap: '100px',
      flexDirection: 'column',
      padding: '20px 0',
    },
    desktop: {
      height: '650px',
      gap: '110px',
      flexDirection: 'row',
    },
  }),
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors['gray-20'],
  },
]);

export const infoSectionLayer = style([
  responsiveStyle({
    tablet: {
      width: '250px',
      height: '180px',
    },
    desktop: {
      width: '385px',
      height: '274px',
    },
  }),
  {
    backgroundColor: colors['gray-10'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '30px',
  },
]);

export const infoSectionLayerImage = style([
  responsiveStyle({
    tablet: {
      width: '98px',
      height: '98px',
    },
    desktop: {
      width: '148px',
      height: '148px',
    },
  }),
]);

export const infoSectionLayerText = style([
  responsiveStyle({
    tablet: {
      width: '250px',
      marginTop: '30px',
    },
    desktop: {
      width: '385px',
      marginTop: '47px',
      padding: '0 10px',
    },
  }),
]);

export const infoSectionTitle = style([
  responsiveStyle({
    tablet: text.title,
    desktop: text.subHeadline,
  }),
  {
    color: colors['brand-30'],
  },
  {
    marginBottom: '12px',
  },
]);

export const infoSectionContent = style([text.body]);

export const aside = style({
  width: '100%',
  height: '592px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const asideImage = style([
  responsiveStyle({
    tablet: {
      width: '340px',
      height: '312px',
      backgroundImage: 'url("/img/fotter-small.png")',
    },
    desktop: {
      width: '1380px',
      height: '312px',
      backgroundImage: 'url("/img/fotter.png")',
    },
  }),
]);

export const feedbackSection = style({
  backgroundColor: colors['secondary-5'],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '50px 20px',
});

export const feedbackSectionTitle = style([
  responsiveStyle({
    tablet: text.subHeadline,
    desktop: text.headline,
  }),
  {
    color: colors['brand-30'],
  },
]);

export const feedbackSectionContent = style([
  text.body,
  {
    marginTop: '12px',
    textAlign: 'center',
  },
]);

export const feedbackSectionImage = style([
  responsiveStyle({
    tablet: {
      marginTop: '28px',
      marginBottom: '33px',
      width: '171px',
      height: '178px',
    },
    desktop: {
      marginTop: '22px',
      marginBottom: '37px',
      width: '220px',
      height: '229px',
    },
  }),
]);

export const feedbackSectionButton = style([
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
    width: '230px',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '10px',
    outline: 'none',
    border: 'none',
    color: colors['gray-10'],
    backgroundColor: colors['secondary-20'],
    cursor: 'pointer',
    ':hover': {
      backgroundColor: colors['secondary-30'],
    },
    ':active': {
      backgroundColor: colors['secondary-30'],
    },
  },
]);

export const footer = style([
  responsiveStyle({
    tablet: {
      height: '346px',
      justifyContent: 'center',
      flexDirection: 'column',
      paddingLeft: '24px',
    },
    desktop: {
      height: '200px',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: '0 110px',
    },
  }),
  {
    display: 'flex',
    backgroundColor: colors['gray-20'],
  },
]);

export const footerLayer = style([
  responsiveStyle({
    tablet: {
      marginTop: '52px',
    },
    desktop: {},
  }),
]);

export const footerImage = style([
  responsiveStyle({
    tablet: {
      marginBottom: '7px',
      width: '120px',
      height: '27px',
    },
    desktop: {
      marginBottom: '14px',
      width: '268px',
      height: '60px',
    },
  }),
]);

export const footerText = style([text.body]);
