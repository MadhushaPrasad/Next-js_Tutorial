import { roboto } from '@theme-ui/presets';

const theme = {
  ...roboto,
  containers: {
    card: {
      shadow: '0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 4,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
  },
  styles: {
    ...roboto.styles,
  },
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
