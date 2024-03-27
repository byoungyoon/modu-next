import { fontFace, globalFontFace, style } from '@vanilla-extract/css';

const preBold = 'PretendardBold';
const preRegular = 'PretendardRegular';
const preSemiBold = 'PretendardSemiBold';

globalFontFace(preBold, {
  src: '/font/Pretendard-Bold.woff',
});

globalFontFace(preRegular, {
  src: '/font/Pretendard-Regular.woff',
});

globalFontFace(preSemiBold, {
  src: '/font/Pretendard-SemiBold.woff',
});

export const bold = style({
  fontFamily: preBold,
});

export const regular = style({
  fontFamily: preRegular,
});

export const semiBold = style({
  fontFamily: preSemiBold,
});

export const fontFaces = {
  bold: fontFace({
    src: '/font/Pretendard-Bold.woff',
  }),
  regular: fontFace({
    src: '/font/Pretendard-Regular.woff',
  }),
  semiBold: fontFace({
    src: '/font/Pretendard-SemiBold.woff',
  }),
};
