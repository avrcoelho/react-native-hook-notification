import { StyleSheet } from 'react-native';

import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    height: 4,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  progressContainer: {
    height: 4,
    borderBottomLeftRadius: 5,
  },

  defaultcolored: {
    backgroundColor: Colors.Grey,
  },
  infocolored: {
    backgroundColor: Colors.White,
  },
  warningcolored: {
    backgroundColor: Colors.White,
  },
  successcolored: {
    backgroundColor: Colors.White,
  },
  errorcolored: {
    backgroundColor: Colors.White,
  },
  defaultlight: {
    backgroundColor: Colors.Grey,
  },
  infolight: {
    backgroundColor: Colors.Blue,
  },
  warninglight: {
    backgroundColor: Colors.Yellow,
  },
  successlight: {
    backgroundColor: Colors.Green,
  },
  errorlight: {
    backgroundColor: Colors.Red,
  },
  defaultdark: {
    backgroundColor: Colors.White,
  },
  infodark: {
    backgroundColor: Colors.Blue,
  },
  warningdark: {
    backgroundColor: Colors.Yellow,
  },
  successdark: {
    backgroundColor: Colors.Green,
  },
  errordark: {
    backgroundColor: Colors.Red,
  },
});
