import { style } from '@vanilla-extract/css';
import { colors, responsiveStyle, text } from '@/app/theme.css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: colors['gray-10'],
  width: '100dvw',
  height: '100dvh',
  overflow: 'auto',
});

export const container = style({
  position: 'relative',
});

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

export const infoSectionContent = style(text.body);

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

export const loading = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
