import { globalFontFace } from '@vanilla-extract/css';

export const preBold = 'PretendardBold';
export const preRegular = 'PretendardRegular';
export const preSemiBold = 'PretendardSemiBold';

globalFontFace(preBold, {
  src: '/font/Pretendard-Bold.woff',
});

globalFontFace(preRegular, {
  src: '/font/Pretendard-Regular.woff',
});

globalFontFace(preSemiBold, {
  src: '/font/Pretendard-SemiBold.woff',
});
