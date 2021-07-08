import { roboto } from '@theme-ui/presets';

const theme = {
  ...roboto,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    ...roboto.colors,
    text: '#FFFFFF',
    background: 'blue',
    primary: '#33e',
  },
};

export default theme;
