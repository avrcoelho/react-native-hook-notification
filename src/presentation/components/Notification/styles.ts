import { StyleSheet } from 'react-native';

import { Colors } from '../../constants/Colors';

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
  defaultcolored: {
    backgroundColor: Colors.White,
    color: Colors.Grey,
  },
  infocolored: {
    backgroundColor: Colors.Blue,
    color: Colors.White,
  },
  warningcolored: {
    backgroundColor: Colors.Yellow,
    color: Colors.White,
  },
  successcolored: {
    backgroundColor: Colors.Green,
    color: Colors.White,
  },
  errorcolored: {
    backgroundColor: Colors.Red,
    color: Colors.White,
  },
  defaultlight: themeLight,
  infolight: themeLight,
  warninglight: themeLight,
  successlight: themeLight,
  errorlight: themeLight,
  defaultdark: themeDark,
  infodark: themeDark,
  warningdark: themeDark,
  successdark: themeDark,
  errordark: themeDark,

  iconContainer: {
    width: 24,
    height: 24,
    flexShrink: 0,
    marginRight: 8,
  },

  textContainer: {
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
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

  buttonClose: {
    width: 16,
    height: 16,
    right: 0,
    top: 0,
    position: 'absolute',
    padding: 0,
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 4,
    borderTopRightRadius: 4,
    zIndex: 2,
  },

  buttonClosecolored: {
    backgroundColor: Colors.White,
  },
  buttonCloselight: {
    backgroundColor: Colors.Grey,
  },
  buttonClosedark: {
    backgroundColor: Colors.White,
  },
});
