import { globalStyle, style } from '@vanilla-extract/css';
import * as Theme from '@/app/theme.css';
import { responsiveStyle } from '@/app/theme.css';

export const modal = style([Theme.customModal]);

export const container = style([
  responsiveStyle({
    tablet: {
      width: '100%',
      height: '100%',
      borderRadius: 0,
    },
    desktop: {
      width: '800px',
      maxHeight: '75dvh',
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
    alignItems: 'start',
    overflow: 'auto',
    scrollbarWidth: 'none',
    padding: '35px',
  },
]);

export const title = style([
  responsiveStyle({
    tablet: {
      ...Theme.text.subHeadline,
    },
    desktop: {
      ...Theme.text.headline,
    },
  }),
  {
    userSelect: 'none',
  },
]);

export const subTitleLayer = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const subTitle = style([
  responsiveStyle({
    tablet: {
      ...Theme.text.body,
    },
    desktop: {
      ...Theme.text.subTitle,
    },
  }),
  {
    color: Theme.colors['gray-70'],
    marginTop: '8px',
    userSelect: 'none',
  },
]);

export const updateLink = style([
  Theme.text.caption,
  {
    color: Theme.colors['secondary-30'],
  },
]);

export const customForm = style({
  width: '100%',
});

export const customFormLayer = style([
  responsiveStyle({
    tablet: {
      marginTop: '45px',
      gap: '40px',
    },
    desktop: {
      marginTop: '58px',
      gap: '60px',
    },
  }),
  {
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
]);

globalStyle(`${customFormLayer} > div`, {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const customInput = style([Theme.customInput, {}]);

export const customLabel = style([
  responsiveStyle({
    tablet: {
      ...Theme.text.subTitle,
    },
    desktop: {
      ...Theme.text.title,
    },
  }),
  {
    color: Theme.colors['secondary-30'],
    fontWeight: 600,
    userSelect: 'none',
  },
]);

export const radioGroup = style({
  display: 'flex',
  gap: '20px',
});

export const courtName = style([
  responsiveStyle({
    tablet: {
      marginTop: '10px',
    },
    desktop: {
      marginTop: '18px',
    },
  }),
]);

export const customTextarea = style([
  Theme.text.subTitle,
  {
    width: '100%',
    borderRadius: '10px',
    backgroundColor: Theme.colors['gray-10'],
    border: '1px solid',
    borderColor: Theme.colors['gray-40'],
    padding: '18px 20px',
    outline: 'none',
    resize: 'none',
  },
]);
