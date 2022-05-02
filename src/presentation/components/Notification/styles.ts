import { StyleSheet, ViewStyle } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Colors } from '../../constants/Colors';
import { NotificationPosition } from '../../types/Notification';

const themeLight = {
  color: Colors.Grey,
  backgroundColor: Colors.White,
};

const themeDark = {
  color: Colors.White,
  backgroundColor: Colors.Black,
};

const topPosisiton = getStatusBarHeight() + 16;

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 4,
    position: 'absolute',
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
    zIndex: 9999999,
    backgroundColor: Colors.White,
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

  buttonCloseText: {
    fontSize: 14,
  },

  buttonCloseTextcolored: { color: Colors.Grey },
  buttonCloseTextlight: { color: Colors.White },
  buttonCloseTextdark: { color: Colors.Black },
});

export const getPositionStyles = (
  isPortrait: boolean,
): Record<NotificationPosition, ViewStyle> => ({
  'top-right': {
    top: isPortrait ? topPosisiton : 16,
    right: isPortrait ? 16 : topPosisiton,
  },
  'top-center': {
    top: isPortrait ? topPosisiton : 16,
    alignSelf: 'center',
  },
  'top-left': {
    top: isPortrait ? topPosisiton : 16,
    left: isPortrait ? 16 : topPosisiton,
  },
  'bottom-right': {
    bottom: 16,
    right: isPortrait ? 16 : topPosisiton,
  },
  'bottom-center': {
    bottom: 16,
    alignSelf: 'center',
  },
  'bottom-left': {
    bottom: 16,
    left: isPortrait ? 16 : topPosisiton,
  },
});
