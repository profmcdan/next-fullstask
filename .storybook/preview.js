import '../styles/globals.css';
import * as NextImage from 'next/image';

const originalNextImage = NextImage.default;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
