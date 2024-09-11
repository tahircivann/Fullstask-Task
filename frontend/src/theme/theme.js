export const colors = {
  actionPrimaryDefault: '#26C281',
  textDefault: '#0F1310',
  textSubdued: '#6F7170',
  borderDefault: '#8C9196',
  borderSubdued: '#C9CCCF',
  iconDefault: '#6F7170',
  surfaceDefault: '#FFFFFF',
  decorativeSurfaceOne: '#9EC59B',
  decorativeTextOne: '#194516',
  actionPrimaryDisabled: '#E4F6ED',
  borderSuccessSubdued: '#BDE9D2',
  textSuccess: '#008347',
  footerBackground: '#F7FCFA',
  borderSubduedLight: '#E4E5E7',
  footerDivider: '#BDE9D2',
  searchInputBackground: '#F7FCFA',
};

export const theme = {
  palette: {
    background: {
      default: '#FFFFFF',
    },
    action: {
      disabledBackground: '#E4F6ED',
    },
    success: {
      main: '#26C281',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
  },
  colors: {
    actionPrimaryDefault: '#26C281',
    textDefault: '#0F1310',
    textSubdued: '#6F7170',
    borderDefault: '#8C9196',
    borderSubdued: '#C9CCCF',
    iconDefault: '#6F7170',
    surfaceDefault: '#FFFFFF',
    decorativeSurfaceOne: '#9EC59B',
    decorativeTextOne: '#194516',
    actionPrimaryDisabled: '#E4F6ED',
    borderSuccessSubdued: '#BDE9D2',
    textSuccess: '#008347',
    footerBackground: '#F7FCFA',
    borderSubduedLight: '#E4E5E7',
  },
  typography: {
    fontFamily: 'Inter',
    fontSizeLarge: '28px',
    fontSizeMedium: '26px',
    fontSizeSmall: '12px',
    fontWeightRegular: '400',
    fontWeightBold: '600',
  },
  spacing: (factor) => `${factor * 8}px`, // mimicking the spacing system from MUI
  borderRadius: '4px',
  shape: {
    borderRadius: '4px',
  },
};