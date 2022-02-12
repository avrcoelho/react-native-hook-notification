import { StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';

const themeLight = {
  color: Colors.Grey,
  backgroundColor: Colors.White,
};

const themeDark = {
  color: Colors.White,
  backgroundColor: Colors.Black,
};

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 4,
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    marginVertical: 6,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  defaultColored: {
    backgroundColor: Colors.White,
    color: Colors.Grey,
  },
  infoColored: {
    backgroundColor: Colors.Blue,
    color: Colors.White,
  },
  warningColored: {
    backgroundColor: Colors.Yellow,
    color: Colors.White,
  },
  successColored: {
    backgroundColor: Colors.Green,
    color: Colors.White,
  },
  errorColored: {
    backgroundColor: Colors.Red,
    color: Colors.White,
  },
  defaultLight: themeLight,
  infoLight: themeLight,
  warningLight: themeLight,
  successLight: themeLight,
  errorLight: themeLight,
  defaultDark: themeDark,
  infoDark: themeDark,
  warningDark: themeDark,
  successDark: themeDark,
  errorDark: themeDark,

  iconContainer: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },

  textContainer: {
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
  },

  textContainerWithIcon: {
    paddingLeft: 8,
  },

  title: {
    fontSize: 15,
    lineHeight: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 14,
    lineHeight: 20,
  },
});
