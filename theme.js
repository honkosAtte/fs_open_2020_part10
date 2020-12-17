import { Platform } from 'react-native';

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      tabBarPrimary: 'pink'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
      heading: 30
    },
    fonts: {
      main: Platform.select({
      android: 'Sans-Serif',
      ios: 'Roboto',
      default: 'System'
    })
  },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  };
  
  export default theme;