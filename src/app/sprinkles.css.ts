import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

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

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: {
      '@media': 'screen and (min-width: 768px)',
    },
    desktop: {
      '@media': 'screen and (min-width: 1024px)',
    },
  },
  defaultCondition: 'desktop',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    fontSize: size,
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
